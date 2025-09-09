#!/usr/bin/env python3
"""
Gallery Image Resizer and Converter
Converts images to WebP format and creates mobile versions (400x400)
"""

import os
import sys
from PIL import Image
import glob

def resize_and_convert_images():
    """Resize and convert gallery images to WebP format"""
    
    # Define paths
    source_dir = "public/Images/Examples"
    output_dir = "public/Images/Examples/webp"
    mobile_dir = "public/Images/Examples/mobile"
    
    # Create output directories if they don't exist
    os.makedirs(output_dir, exist_ok=True)
    os.makedirs(mobile_dir, exist_ok=True)
    
    # Supported image formats
    image_extensions = ['*.jpg', '*.jpeg', '*.png', '*.JPG', '*.JPEG', '*.PNG']
    
    # Find all images in the Examples directory
    image_files = []
    for ext in image_extensions:
        image_files.extend(glob.glob(os.path.join(source_dir, ext)))
    
    if not image_files:
        print(f"No images found in {source_dir}")
        return
    
    print(f"Found {len(image_files)} images to process...")
    
    processed_count = 0
    
    for image_path in image_files:
        try:
            # Get filename without extension
            filename = os.path.splitext(os.path.basename(image_path))[0]
            
            # Open image
            with Image.open(image_path) as img:
                # Convert to RGB if necessary (for PNG with transparency)
                if img.mode in ('RGBA', 'LA', 'P'):
                    # Create a white background
                    background = Image.new('RGB', img.size, (255, 255, 255))
                    if img.mode == 'P':
                        img = img.convert('RGBA')
                    background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                    img = background
                elif img.mode != 'RGB':
                    img = img.convert('RGB')
                
                # Create desktop version (maintain aspect ratio, max width 1200px)
                desktop_img = img.copy()
                if desktop_img.width > 1200:
                    ratio = 1200 / desktop_img.width
                    new_height = int(desktop_img.height * ratio)
                    desktop_img = desktop_img.resize((1200, new_height), Image.Resampling.LANCZOS)
                
                # Save desktop WebP version
                desktop_output = os.path.join(output_dir, f"{filename}.webp")
                desktop_img.save(desktop_output, 'WebP', quality=85, optimize=True)
                
                # Create mobile version (400x400, center crop)
                mobile_img = img.copy()
                
                # Calculate crop dimensions for square aspect ratio
                size = min(mobile_img.width, mobile_img.height)
                left = (mobile_img.width - size) // 2
                top = (mobile_img.height - size) // 2
                right = left + size
                bottom = top + size
                
                # Crop to square
                mobile_img = mobile_img.crop((left, top, right, bottom))
                
                # Resize to 400x400
                mobile_img = mobile_img.resize((400, 400), Image.Resampling.LANCZOS)
                
                # Save mobile WebP version
                mobile_output = os.path.join(mobile_dir, f"{filename}.webp")
                mobile_img.save(mobile_output, 'WebP', quality=80, optimize=True)
                
                processed_count += 1
                print(f"✓ Processed: {filename}")
                
        except Exception as e:
            print(f"✗ Error processing {image_path}: {str(e)}")
    
    print(f"\nCompleted! Processed {processed_count} images.")
    print(f"Desktop versions saved to: {output_dir}")
    print(f"Mobile versions saved to: {mobile_dir}")

if __name__ == "__main__":
    # Check if PIL is available
    try:
        from PIL import Image
    except ImportError:
        print("Error: PIL (Pillow) is required. Install it with:")
        print("pip install Pillow")
        sys.exit(1)
    
    resize_and_convert_images()
