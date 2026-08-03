from pathlib import Path
import sys

from PIL import Image, ImageOps


if len(sys.argv) != 3:
    raise SystemExit("Usage: prepare_og_image.py <source> <destination>")

source = Path(sys.argv[1])
destination = Path(sys.argv[2])
destination.parent.mkdir(parents=True, exist_ok=True)

with Image.open(source) as image:
    card = ImageOps.fit(
        image.convert("RGB"),
        (1200, 630),
        method=Image.Resampling.LANCZOS,
        centering=(0.5, 0.5),
    )
    card.save(destination, "PNG", optimize=True)

print(destination)
