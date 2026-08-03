from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
SOURCE_ROOT = ROOT / "tmp" / "pdfs"


def make_sheet(language: str) -> None:
    pages = sorted((SOURCE_ROOT / language).glob("page-*.png"))
    if not pages:
        raise SystemExit(f"No rendered pages found for {language}")

    thumb_width = 210
    gutter = 18
    label_height = 28
    columns = 5
    rows = (len(pages) + columns - 1) // columns

    with Image.open(pages[0]) as first:
        thumb_height = round(first.height * thumb_width / first.width)

    canvas = Image.new(
        "RGB",
        (
            columns * thumb_width + (columns + 1) * gutter,
            rows * (thumb_height + label_height) + (rows + 1) * gutter,
        ),
        "#E9E4DA",
    )
    draw = ImageDraw.Draw(canvas)
    font = ImageFont.load_default()

    for index, path in enumerate(pages):
        row, column = divmod(index, columns)
        x = gutter + column * (thumb_width + gutter)
        y = gutter + row * (thumb_height + label_height + gutter)
        with Image.open(path) as page:
            preview = page.convert("RGB")
            preview.thumbnail((thumb_width, thumb_height), Image.Resampling.LANCZOS)
            canvas.paste(preview, (x, y + label_height))
        label = f"{language.upper()} · {index + 1:02d}"
        draw.text((x, y + 7), label, fill="#24362F", font=font)

    output = SOURCE_ROOT / f"contact-sheet-{language}.jpg"
    canvas.save(output, quality=88, optimize=True)
    print(output)


for code in ("en", "es"):
    make_sheet(code)
