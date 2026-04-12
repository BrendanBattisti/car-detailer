#!/usr/bin/env python3
"""
Build a single looping hero video from multiple clips.

Example:
  python build_hero_loop.py --loops 2 --transition-duration 1.0
"""

from __future__ import annotations

import argparse
import shutil
import subprocess
import tempfile
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Concatenate hero videos into one output mp4 (with optional crossfades)."
    )
    parser.add_argument(
        "--inputs",
        nargs="+",
        default=[
            "public/Video/hero1.mp4",
            "public/Video/hero2.mp4",
            "public/Video/hero3.mp4",
        ],
        help="Ordered list of input video clips.",
    )
    parser.add_argument(
        "--output",
        default="public/Video/hero-loop.mp4",
        help="Output file path.",
    )
    parser.add_argument(
        "--loops",
        type=int,
        default=1,
        help="How many times to repeat the full sequence in the output file.",
    )
    parser.add_argument(
        "--width",
        type=int,
        default=1920,
        help="Output width.",
    )
    parser.add_argument(
        "--height",
        type=int,
        default=1080,
        help="Output height.",
    )
    parser.add_argument(
        "--fps",
        type=int,
        default=30,
        help="Output frames per second.",
    )
    parser.add_argument(
        "--crf",
        type=int,
        default=20,
        help="x264 quality. Lower is higher quality and larger files.",
    )
    parser.add_argument(
        "--transition-duration",
        type=float,
        default=1.0,
        help=(
            "Seconds for clip-to-clip crossfade. Use 0 to disable and do a hard cut."
        ),
    )
    parser.add_argument(
        "--transition-type",
        default="fade",
        help="ffmpeg xfade transition type (default: fade).",
    )
    return parser.parse_args()


def ensure_ffmpeg() -> None:
    if shutil.which("ffmpeg"):
        return
    raise SystemExit(
        "ffmpeg is required but was not found in PATH. Install ffmpeg and try again."
    )


def ensure_ffprobe() -> None:
    if shutil.which("ffprobe"):
        return
    raise SystemExit(
        "ffprobe is required for transitions but was not found in PATH."
    )


def resolve_inputs(paths: list[str], project_root: Path) -> list[Path]:
    resolved: list[Path] = []
    for raw_path in paths:
        candidate = Path(raw_path)
        if not candidate.is_absolute():
            candidate = project_root / candidate
        candidate = candidate.resolve()
        if not candidate.exists():
            raise SystemExit(f"Input file not found: {candidate}")
        resolved.append(candidate)
    return resolved


def expand_inputs(inputs: list[Path], loops: int) -> list[Path]:
    if loops < 1:
        raise SystemExit("--loops must be >= 1")
    expanded: list[Path] = []
    for _ in range(loops):
        expanded.extend(inputs)
    return expanded


def write_concat_file(concat_file: Path, inputs: list[Path]) -> None:
    lines: list[str] = []
    for input_path in inputs:
        # Concat demuxer accepts single-quoted paths.
        escaped = str(input_path).replace("'", r"'\''")
        lines.append(f"file '{escaped}'")
    concat_file.write_text("\n".join(lines) + "\n", encoding="utf-8")


def run_or_raise(command: list[str]) -> None:
    result = subprocess.run(command, capture_output=True, text=True)
    if result.returncode != 0:
        raise SystemExit(
            "ffmpeg failed.\n\nSTDOUT:\n"
            f"{result.stdout}\n\nSTDERR:\n{result.stderr}"
        )


def build_hard_cut_video(
    inputs: list[Path],
    concat_file: Path,
    output_file: Path,
    width: int,
    height: int,
    fps: int,
    crf: int,
) -> None:
    output_file.parent.mkdir(parents=True, exist_ok=True)

    vf = (
        f"scale={width}:{height}:force_original_aspect_ratio=decrease,"
        f"pad={width}:{height}:(ow-iw)/2:(oh-ih)/2,"
        "format=yuv420p"
    )

    command = [
        "ffmpeg",
        "-y",
        "-f",
        "concat",
        "-safe",
        "0",
        "-i",
        str(concat_file),
        "-vf",
        vf,
        "-r",
        str(fps),
        "-c:v",
        "libx264",
        "-preset",
        "medium",
        "-crf",
        str(crf),
        "-movflags",
        "+faststart",
        "-an",
        str(output_file),
    ]
    run_or_raise(command)


def get_duration_seconds(video_file: Path) -> float:
    command = [
        "ffprobe",
        "-v",
        "error",
        "-show_entries",
        "format=duration",
        "-of",
        "default=noprint_wrappers=1:nokey=1",
        str(video_file),
    ]
    result = subprocess.run(command, capture_output=True, text=True)
    if result.returncode != 0:
        raise SystemExit(
            f"ffprobe failed for {video_file}.\n\nSTDERR:\n{result.stderr}"
        )

    duration_raw = result.stdout.strip()
    try:
        duration = float(duration_raw)
    except ValueError as exc:
        raise SystemExit(
            f"Could not parse duration for {video_file}: {duration_raw!r}"
        ) from exc

    if duration <= 0:
        raise SystemExit(f"Invalid duration for {video_file}: {duration}")
    return duration


def build_crossfade_video(
    inputs: list[Path],
    output_file: Path,
    width: int,
    height: int,
    fps: int,
    crf: int,
    transition_duration: float,
    transition_type: str,
) -> None:
    if len(inputs) < 2:
        raise SystemExit("Need at least 2 clips to apply transitions.")

    durations = [get_duration_seconds(video) for video in inputs]
    for clip, duration in zip(inputs, durations):
        if duration <= transition_duration:
            raise SystemExit(
                f"Transition duration ({transition_duration}s) must be shorter than "
                f"each clip. {clip.name} is only {duration:.3f}s."
            )

    output_file.parent.mkdir(parents=True, exist_ok=True)

    command: list[str] = ["ffmpeg", "-y"]
    for input_video in inputs:
        command.extend(["-i", str(input_video)])

    normalized_labels: list[str] = []
    filter_parts: list[str] = []
    for index in range(len(inputs)):
        label = f"v{index}"
        normalized_labels.append(label)
        filter_parts.append(
            (
                f"[{index}:v]"
                f"scale={width}:{height}:force_original_aspect_ratio=decrease,"
                f"pad={width}:{height}:(ow-iw)/2:(oh-ih)/2,"
                f"fps={fps},format=yuv420p,setsar=1"
                f"[{label}]"
            )
        )

    current_label = normalized_labels[0]
    timeline_duration = durations[0]
    for index in range(1, len(inputs)):
        output_label = f"xf{index}"
        offset = timeline_duration - transition_duration
        filter_parts.append(
            (
                f"[{current_label}][{normalized_labels[index]}]"
                f"xfade=transition={transition_type}:"
                f"duration={transition_duration:.3f}:offset={offset:.3f}"
                f"[{output_label}]"
            )
        )
        timeline_duration += durations[index] - transition_duration
        current_label = output_label

    command.extend(
        [
            "-filter_complex",
            ";".join(filter_parts),
            "-map",
            f"[{current_label}]",
            "-c:v",
            "libx264",
            "-preset",
            "medium",
            "-crf",
            str(crf),
            "-movflags",
            "+faststart",
            "-an",
            str(output_file),
        ]
    )

    run_or_raise(command)


def main() -> None:
    args = parse_args()
    ensure_ffmpeg()
    if args.transition_duration < 0:
        raise SystemExit("--transition-duration must be >= 0")
    if args.transition_duration > 0:
        ensure_ffprobe()

    project_root = Path(__file__).resolve().parent
    input_files = resolve_inputs(args.inputs, project_root)
    expanded_inputs = expand_inputs(input_files, args.loops)

    output_file = Path(args.output)
    if not output_file.is_absolute():
        output_file = (project_root / output_file).resolve()

    if args.transition_duration == 0 or len(expanded_inputs) < 2:
        with tempfile.TemporaryDirectory(prefix="hero-concat-") as temp_dir:
            concat_file = Path(temp_dir) / "inputs.txt"
            write_concat_file(concat_file, expanded_inputs)
            build_hard_cut_video(
                inputs=expanded_inputs,
                concat_file=concat_file,
                output_file=output_file,
                width=args.width,
                height=args.height,
                fps=args.fps,
                crf=args.crf,
            )
    else:
        build_crossfade_video(
            inputs=expanded_inputs,
            output_file=output_file,
            width=args.width,
            height=args.height,
            fps=args.fps,
            crf=args.crf,
            transition_duration=args.transition_duration,
            transition_type=args.transition_type,
        )

    print(f"Built: {output_file}")


if __name__ == "__main__":
    main()
