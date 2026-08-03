from pathlib import Path

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
PDF_DIR = ROOT / "output" / "pdf"

CASES = {
    "school-night-screen-reset-en.pdf": {
        "first": "The 7-Day School-Night Screen Reset",
        "quickstart": "Your ten-minute start",
        "last": "Built for action, grounded in family media planning",
    },
    "school-night-screen-reset-es.pdf": {
        "first": "El reinicio de pantallas en 7 noches escolares",
        "quickstart": "Tus primeros diez minutos",
        "last": "Creado para actuar, basado en planificación familiar",
    },
}


for filename, expected in CASES.items():
    path = PDF_DIR / filename
    reader = PdfReader(path)
    assert len(reader.pages) == 29, f"{filename}: expected 29 pages"

    page_texts = [(page.extract_text() or "").strip() for page in reader.pages]
    normalized_pages = [" ".join(text.split()) for text in page_texts]
    assert all(len(text) >= 25 for text in page_texts), f"{filename}: blank or near-blank page"
    assert expected["first"] in normalized_pages[0], f"{filename}: cover title mismatch"
    assert expected["quickstart"] in normalized_pages[1], f"{filename}: quick-start title mismatch"
    assert expected["last"] in normalized_pages[-1], f"{filename}: sources title mismatch"

    full_text = "\n".join(page_texts)
    for bad in ("\ufffd", "Ã", "â€"):
        assert bad not in full_text, f"{filename}: encoding artifact {bad!r}"

    media_box = reader.pages[0].mediabox
    assert abs(float(media_box.width) - 595.276) < 1, f"{filename}: unexpected width"
    assert abs(float(media_box.height) - 841.89) < 1, f"{filename}: unexpected height"

    annotations = reader.pages[-1].get("/Annots", [])
    assert len(annotations) >= 4, f"{filename}: source links are missing"

    print(f"PASS {filename}: 29 pages, readable text, A4, {len(annotations)} linked sources")
