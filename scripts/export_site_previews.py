from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "tmp" / "pdfs"
OUTPUT = ROOT / "public" / "product"

PAGES = {
    "cover": 1,
    "quickstart": 2,
    "meeting": 8,
    "pushback": 18,
    "tracker": 24,
}


OUTPUT.mkdir(parents=True, exist_ok=True)

for language in ("en", "es"):
    for label, page_number in PAGES.items():
        source = SOURCE / language / f"page-{page_number:02d}.png"
        destination = OUTPUT / f"{language}-{label}.webp"
        with Image.open(source) as image:
            preview = image.convert("RGB")
            if preview.width > 760:
                height = round(preview.height * 760 / preview.width)
                preview = preview.resize((760, height), Image.Resampling.LANCZOS)
            preview.save(destination, "WEBP", quality=86, method=6)
        print(destination)
