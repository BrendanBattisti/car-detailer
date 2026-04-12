#!/usr/bin/env python3
"""
Build a single looping hero video from multiple clips.

Example:
  python build_hero_loop.py --loops 2
"""

from __future__ import annotations

import argparse
import shutil
import subprocess
import tempfile
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Concatenate hero videos into one output mp4."
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
    return parser.parse_args()


def ensure_ffmpeg() -> None:
    if shutil.which("ffmpeg"):
        return
    raise SystemExit(
        "ffmpeg is required but was not found in PATH. Install ffmpeg and try again."
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


def write_concat_file(concat_file: Path, inputs: list[Path], loops: int) -> None:
    if loops < 1:
        raise SystemExit("--loops must be >= 1")

    lines: list[str] = []
    for _ in range(loops):
        for input_path in inputs:
            # Concat demuxer accepts single-quoted paths.
            escaped = str(input_path).replace("'", r"'\''")
            lines.append(f"file '{escaped}'")
    concat_file.write_text("\n".join(lines) + "\n", encoding="utf-8")


def build_video(
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

    result = subprocess.run(command, capture_output=True, text=True)
    if result.returncode != 0:
        raise SystemExit(
            "ffmpeg failed.\n\nSTDOUT:\n"
            f"{result.stdout}\n\nSTDERR:\n{result.stderr}"
        )


def main() -> None:
    args = parse_args()
    ensure_ffmpeg()

    project_root = Path(__file__).resolve().parent
    input_files = resolve_inputs(args.inputs, project_root)

    output_file = Path(args.output)
    if not output_file.is_absolute():
        output_file = (project_root / output_file).resolve()

    with tempfile.TemporaryDirectory(prefix="hero-concat-") as temp_dir:
        concat_file = Path(temp_dir) / "inputs.txt"
        write_concat_file(concat_file, input_files, args.loops)
        build_video(
            concat_file=concat_file,
            output_file=output_file,
            width=args.width,
            height=args.height,
            fps=args.fps,
            crf=args.crf,
        )

    print(f"Built: {output_file}")


if __name__ == "__main__":
    main()
