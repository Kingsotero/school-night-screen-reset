from __future__ import annotations

import os
import sys
from pathlib import Path
from typing import Any

from reportlab.lib import colors
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from content.kit_content import EN_META, EN_PAGES, ES_META, ES_PAGES  # noqa: E402


PAGE_W, PAGE_H = A4
MARGIN_X = 18 * mm
CONTENT_W = PAGE_W - 2 * MARGIN_X
TOP_Y = PAGE_H - 24 * mm
BOTTOM_SAFE = 31 * mm

PAPER = HexColor("#F7F3EA")
PAPER_2 = HexColor("#FCFAF5")
INK = HexColor("#203443")
INK_SOFT = HexColor("#53626C")
CORAL = HexColor("#E97868")
CORAL_LIGHT = HexColor("#F7DDD7")
SAGE = HexColor("#A9C5B6")
SAGE_LIGHT = HexColor("#E2ECE6")
MUSTARD = HexColor("#E7BB5E")
MUSTARD_LIGHT = HexColor("#F6E9C9")
LINE = HexColor("#D4D0C8")
WHITE_TINT = HexColor("#FEFCF7")


def copy_for(meta: dict[str, str], english: str, spanish: str) -> str:
    """Return edition-specific interface copy without mixing languages."""
    return spanish if meta["language"].startswith("Esp") else english


def register_fonts() -> None:
    fonts = {
        "Body": r"C:\Windows\Fonts\arial.ttf",
        "Body-Bold": r"C:\Windows\Fonts\arialbd.ttf",
        "Body-Italic": r"C:\Windows\Fonts\ariali.ttf",
        "Display": r"C:\Windows\Fonts\georgia.ttf",
        "Display-Bold": r"C:\Windows\Fonts\georgiab.ttf",
    }
    for name, path in fonts.items():
        if os.path.exists(path):
            pdfmetrics.registerFont(TTFont(name, path))
        else:
            raise FileNotFoundError(f"Required font missing: {path}")


def style(
    name: str,
    size: float = 10,
    leading: float | None = None,
    color: colors.Color = INK,
    font: str = "Body",
    align: int = TA_LEFT,
    space_after: float = 0,
) -> ParagraphStyle:
    return ParagraphStyle(
        name,
        fontName=font,
        fontSize=size,
        leading=leading or size * 1.35,
        textColor=color,
        alignment=align,
        spaceAfter=space_after,
        allowWidows=0,
        allowOrphans=0,
    )


BODY = style("Body", 9.4, 13.1, INK)
BODY_SMALL = style("BodySmall", 8.1, 10.8, INK_SOFT)
BODY_TINY = style("BodyTiny", 7.2, 9.3, INK_SOFT)
BODY_BOLD = style("BodyBold", 9.3, 12.4, INK, "Body-Bold")
TITLE = style("Title", 25, 29, INK, "Display-Bold")
TITLE_SMALL = style("TitleSmall", 22, 26, INK, "Display-Bold")
SUBTITLE = style("Subtitle", 11, 15, INK_SOFT)
KICKER = style("Kicker", 7.4, 9, CORAL, "Body-Bold")
BOX_TITLE = style("BoxTitle", 9.2, 11.5, INK, "Body-Bold")
BOX_BODY = style("BoxBody", 8.4, 11.2, INK)
SCRIPT = style("Script", 9.1, 12.7, INK, "Body-Italic")
ACTION = style("Action", 8.4, 11.3, INK, "Body-Bold")


def draw_paragraph(
    c: canvas.Canvas,
    text: str,
    x: float,
    y: float,
    width: float,
    pstyle: ParagraphStyle = BODY,
    max_height: float = 200 * mm,
) -> float:
    p = Paragraph(text, pstyle)
    _, h = p.wrap(width, max_height)
    p.drawOn(c, x, y - h)
    return y - h


def rounded_rect(
    c: canvas.Canvas,
    x: float,
    y: float,
    width: float,
    height: float,
    fill: colors.Color,
    stroke: colors.Color | None = None,
    radius: float = 4 * mm,
    line_width: float = 0.8,
) -> None:
    c.setLineWidth(line_width)
    c.setFillColor(fill)
    c.setStrokeColor(stroke or fill)
    c.roundRect(x, y, width, height, radius, fill=1, stroke=1 if stroke else 0)


def checkbox(c: canvas.Canvas, x: float, y: float, size: float = 3.2 * mm) -> None:
    c.setLineWidth(0.8)
    c.setStrokeColor(INK_SOFT)
    c.roundRect(x, y - size, size, size, 1.2, fill=0, stroke=1)


def line(c: canvas.Canvas, x1: float, y1: float, x2: float, y2: float, color=LINE, width=0.8) -> None:
    c.setStrokeColor(color)
    c.setLineWidth(width)
    c.line(x1, y1, x2, y2)


def draw_page_chrome(c: canvas.Canvas, meta: dict[str, str], page_no: int, total: int, cover=False) -> None:
    if cover:
        return
    c.setFillColor(PAPER)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setFillColor(INK_SOFT)
    c.setFont("Body", 6.8)
    c.drawString(MARGIN_X, 12 * mm, meta["short_title"])
    c.drawRightString(PAGE_W - MARGIN_X, 12 * mm, f"{page_no} / {total}")
    line(c, MARGIN_X, 16 * mm, PAGE_W - MARGIN_X, 16 * mm, LINE, 0.6)


def draw_heading(c: canvas.Canvas, page: dict[str, Any], y=TOP_Y) -> float:
    if page.get("kicker"):
        c.setFillColor(CORAL)
        c.setFont("Body-Bold", 7.3)
        c.drawString(MARGIN_X, y, page["kicker"].upper())
        y -= 8 * mm
    y = draw_paragraph(c, page["title"], MARGIN_X, y, CONTENT_W, TITLE)
    if page.get("intro"):
        y -= 3 * mm
        y = draw_paragraph(c, page["intro"], MARGIN_X, y, CONTENT_W, SUBTITLE)
    return y - 5 * mm


def draw_action(c: canvas.Canvas, meta: dict[str, str], text: str) -> None:
    x = MARGIN_X
    y = 21 * mm
    h = 20 * mm
    rounded_rect(c, x, y, CONTENT_W, h, MUSTARD_LIGHT, MUSTARD, 4 * mm, 0.7)
    c.setFillColor(INK)
    c.setFont("Body-Bold", 7)
    c.drawString(x + 5 * mm, y + h - 6.5 * mm, meta["tonight"])
    draw_paragraph(c, text, x + 5 * mm, y + h - 9 * mm, CONTENT_W - 10 * mm, ACTION, 12 * mm)


def draw_cover(c: canvas.Canvas, meta: dict[str, str], page: dict[str, Any]) -> None:
    c.setFillColor(INK)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setFillColor(SAGE)
    c.circle(PAGE_W - 28 * mm, PAGE_H - 28 * mm, 34 * mm, fill=1, stroke=0)
    c.setFillColor(CORAL)
    c.circle(PAGE_W - 4 * mm, 20 * mm, 30 * mm, fill=1, stroke=0)
    c.setFillColor(MUSTARD)
    c.roundRect(17 * mm, 18 * mm, 53 * mm, 8 * mm, 4 * mm, fill=1, stroke=0)

    c.setFillColor(MUSTARD)
    c.setFont("Body-Bold", 7.4)
    c.drawString(18 * mm, PAGE_H - 28 * mm, page["eyebrow"])

    cover_title = style("CoverTitle", 31, 35, WHITE_TINT, "Display-Bold")
    y = draw_paragraph(c, page["title"], 18 * mm, PAGE_H - 62 * mm, PAGE_W - 50 * mm, cover_title)
    y -= 8 * mm
    draw_paragraph(c, page["subtitle"], 18 * mm, y, PAGE_W - 55 * mm, style("CoverSub", 12.5, 17, WHITE_TINT))

    rounded_rect(c, 18 * mm, 65 * mm, 53 * mm, 13 * mm, CORAL, None, 6.5 * mm)
    c.setFillColor(WHITE_TINT)
    c.setFont("Body-Bold", 7.8)
    c.drawCentredString(44.5 * mm, 69.3 * mm, page["badge"])

    # Seven-step path motif.
    start_x = 21 * mm
    path_y = 43 * mm
    for i in range(7):
        x = start_x + i * 14 * mm
        c.setFillColor(MUSTARD if i == 6 else SAGE)
        c.circle(x, path_y, 3.3 * mm, fill=1, stroke=0)
        if i < 6:
            line(c, x + 3.3 * mm, path_y, x + 10.7 * mm, path_y, SAGE, 2)
        c.setFillColor(INK)
        c.setFont("Body-Bold", 6)
        c.drawCentredString(x, path_y - 1.8, str(i + 1))

    c.setFillColor(WHITE_TINT)
    c.setFont("Body", 7.2)
    c.drawString(
        18 * mm,
        30 * mm,
        copy_for(meta, "Printable A4 edition  •  Personal household use", "Edición A4 imprimible  •  Uso familiar personal"),
    )


def draw_quickstart(c: canvas.Canvas, meta: dict[str, str], page: dict[str, Any]) -> None:
    y = draw_heading(c, page)
    gap = 4 * mm
    box_h = 27 * mm
    for idx, (num, title, body) in enumerate(page["steps"]):
        row = idx // 2
        col = idx % 2
        w = (CONTENT_W - gap) / 2
        x = MARGIN_X + col * (w + gap)
        by = y - (row + 1) * box_h - row * gap
        rounded_rect(c, x, by, w, box_h, SAGE_LIGHT if idx % 2 == 0 else CORAL_LIGHT)
        c.setFillColor(CORAL if idx % 2 == 0 else INK)
        c.setFont("Display-Bold", 17)
        c.drawString(x + 4 * mm, by + box_h - 8 * mm, num)
        draw_paragraph(c, title, x + 14 * mm, by + box_h - 5 * mm, w - 18 * mm, BOX_TITLE)
        draw_paragraph(c, body, x + 4 * mm, by + box_h - 13 * mm, w - 8 * mm, BOX_BODY)
    script_y = y - 2 * box_h - gap - 8 * mm
    rounded_rect(c, MARGIN_X, script_y - 28 * mm, CONTENT_W, 28 * mm, PAPER_2, CORAL)
    c.setFillColor(CORAL)
    c.setFont("Body-Bold", 7)
    c.drawString(MARGIN_X + 5 * mm, script_y - 6 * mm, copy_for(meta, "SAY THIS", "DI ESTO"))
    draw_paragraph(c, f'“{page["script"]}”', MARGIN_X + 5 * mm, script_y - 10 * mm, CONTENT_W - 10 * mm, SCRIPT)
    draw_action(c, meta, page["action"])


def draw_content(c: canvas.Canvas, meta: dict[str, str], page: dict[str, Any]) -> None:
    y = draw_heading(c, page)
    for bullet in page.get("bullets", []):
        checkbox(c, MARGIN_X, y - 1 * mm)
        y = draw_paragraph(c, bullet, MARGIN_X + 6 * mm, y + 1 * mm, CONTENT_W - 6 * mm, BODY)
        y -= 4 * mm
    if page.get("note"):
        h = 34 * mm
        rounded_rect(c, MARGIN_X, max(BOTTOM_SAFE + 23 * mm, y - h), CONTENT_W, h, SAGE_LIGHT, SAGE)
        by = max(BOTTOM_SAFE + 23 * mm, y - h)
        draw_paragraph(c, page.get("note_title", "NOTE"), MARGIN_X + 5 * mm, by + h - 5 * mm, CONTENT_W - 10 * mm, BOX_TITLE)
        draw_paragraph(c, page["note"], MARGIN_X + 5 * mm, by + h - 13 * mm, CONTENT_W - 10 * mm, BOX_BODY)
    draw_action(c, meta, page["action"])


def draw_worksheet(c: canvas.Canvas, meta: dict[str, str], page: dict[str, Any]) -> None:
    y = draw_heading(c, page)
    if page.get("formula"):
        h = 20 * mm
        rounded_rect(c, MARGIN_X, y - h, CONTENT_W, h, MUSTARD_LIGHT, MUSTARD)
        draw_paragraph(c, page["formula"], MARGIN_X + 5 * mm, y - 5 * mm, CONTENT_W - 10 * mm, BODY_BOLD)
        y -= h + 5 * mm
    for prompt in page["prompts"]:
        y = draw_paragraph(c, prompt, MARGIN_X, y, CONTENT_W, BODY_BOLD)
        y -= 4 * mm
        line(c, MARGIN_X, y, PAGE_W - MARGIN_X, y)
        y -= 7 * mm
    if page.get("examples"):
        y -= 1 * mm
        for ex in page["examples"]:
            prefix = copy_for(meta, "Example", "Ejemplo")
            y = draw_paragraph(c, f"{prefix}: {ex}", MARGIN_X, y, CONTENT_W, BODY_SMALL)
            y -= 2 * mm
    if page.get("checks"):
        y -= 2 * mm
        y = draw_paragraph(c, page["check_title"], MARGIN_X, y, CONTENT_W, BOX_TITLE)
        y -= 3 * mm
        for idx, label in enumerate(page["checks"]):
            col = idx % 2
            row = idx // 2
            x = MARGIN_X + col * (CONTENT_W / 2)
            yy = y - row * 9 * mm
            checkbox(c, x, yy)
            draw_paragraph(c, label, x + 5 * mm, yy + 0.5 * mm, CONTENT_W / 2 - 7 * mm, BODY_SMALL)
    draw_action(c, meta, page["action"])


def draw_timeline(c: canvas.Canvas, meta: dict[str, str], page: dict[str, Any]) -> None:
    y = draw_heading(c, page)
    data = [[""] + page["times"]]
    for p in page["prompts"]:
        data.append([p] + ["\n\n" for _ in page["times"]])
    table = Table(data, colWidths=[30 * mm] + [(CONTENT_W - 30 * mm) / 5] * 5, rowHeights=[11 * mm] + [27 * mm] * 3)
    table.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (-1, 0), "Body-Bold"),
        ("FONTNAME", (0, 1), (0, -1), "Body-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 6.6),
        ("TEXTCOLOR", (0, 0), (-1, -1), INK),
        ("BACKGROUND", (0, 0), (-1, 0), SAGE_LIGHT),
        ("BACKGROUND", (0, 1), (0, -1), MUSTARD_LIGHT),
        ("GRID", (0, 0), (-1, -1), 0.5, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ALIGN", (1, 0), (-1, 0), "CENTER"),
        ("LEFTPADDING", (0, 0), (-1, -1), 3),
        ("RIGHTPADDING", (0, 0), (-1, -1), 3),
    ]))
    _, th = table.wrap(CONTENT_W, 130 * mm)
    table.drawOn(c, MARGIN_X, y - th)
    y -= th + 6 * mm
    rounded_rect(c, MARGIN_X, y - 28 * mm, CONTENT_W, 28 * mm, CORAL_LIGHT, CORAL)
    draw_paragraph(c, page["note_title"], MARGIN_X + 5 * mm, y - 5 * mm, CONTENT_W - 10 * mm, BOX_TITLE)
    draw_paragraph(c, page["note"], MARGIN_X + 5 * mm, y - 13 * mm, CONTENT_W - 10 * mm, BOX_BODY)
    draw_action(c, meta, page["action"])


def draw_menu(c: canvas.Canvas, meta: dict[str, str], page: dict[str, Any]) -> None:
    y = draw_heading(c, page)
    gap = 4 * mm
    w = (CONTENT_W - 2 * gap) / 3
    colors_list = [(SAGE_LIGHT, SAGE), (CORAL_LIGHT, CORAL), (MUSTARD_LIGHT, MUSTARD)]
    box_h = 92 * mm
    for idx, (heading, items) in enumerate(page["columns"]):
        x = MARGIN_X + idx * (w + gap)
        fill, stroke = colors_list[idx]
        rounded_rect(c, x, y - box_h, w, box_h, fill, stroke)
        draw_paragraph(c, heading, x + 4 * mm, y - 5 * mm, w - 8 * mm, BOX_TITLE)
        yy = y - 17 * mm
        for item in items:
            checkbox(c, x + 4 * mm, yy)
            yy = draw_paragraph(c, item, x + 9 * mm, yy + 0.5 * mm, w - 13 * mm, BODY_SMALL)
            yy -= 4 * mm
    y2 = y - box_h - 8 * mm
    draw_paragraph(c, page["prompt"], MARGIN_X, y2, CONTENT_W, BODY_BOLD)
    line(c, MARGIN_X, y2 - 8 * mm, PAGE_W - MARGIN_X, y2 - 8 * mm)
    line(c, MARGIN_X, y2 - 17 * mm, PAGE_W - MARGIN_X, y2 - 17 * mm)
    draw_action(c, meta, page["action"])


def draw_meeting(c: canvas.Canvas, meta: dict[str, str], page: dict[str, Any]) -> None:
    y = draw_heading(c, page)
    for idx, (duration, title, quote) in enumerate(page["beats"]):
        h = 22 * mm
        fill = PAPER_2 if idx % 2 else SAGE_LIGHT
        rounded_rect(c, MARGIN_X, y - h, CONTENT_W, h, fill, LINE)
        c.setFillColor(CORAL)
        c.setFont("Body-Bold", 7.2)
        c.drawString(MARGIN_X + 4 * mm, y - 6 * mm, duration)
        draw_paragraph(c, title, MARGIN_X + 22 * mm, y - 4 * mm, 53 * mm, BOX_TITLE)
        draw_paragraph(c, f'“{quote}”', MARGIN_X + 78 * mm, y - 4 * mm, CONTENT_W - 83 * mm, BOX_BODY)
        y -= h + 3 * mm
    rounded_rect(c, MARGIN_X, y - 27 * mm, CONTENT_W, 27 * mm, MUSTARD_LIGHT, MUSTARD)
    draw_paragraph(c, page["note_title"], MARGIN_X + 5 * mm, y - 5 * mm, CONTENT_W - 10 * mm, BOX_TITLE)
    draw_paragraph(c, page["note"], MARGIN_X + 5 * mm, y - 13 * mm, CONTENT_W - 10 * mm, BOX_BODY)
    draw_action(c, meta, page["action"])


def draw_daily(c: canvas.Canvas, meta: dict[str, str], page: dict[str, Any]) -> None:
    c.setFillColor(CORAL)
    c.setFont("Body-Bold", 7.5)
    c.drawString(MARGIN_X, TOP_Y, page["day"])
    y = draw_paragraph(c, page["title"], MARGIN_X, TOP_Y - 8 * mm, CONTENT_W, TITLE)
    y -= 2 * mm
    y = draw_paragraph(c, page["focus"], MARGIN_X, y, CONTENT_W, SUBTITLE)
    y -= 5 * mm
    for idx, step in enumerate(page["steps"]):
        c.setFillColor(SAGE if idx % 2 == 0 else MUSTARD)
        c.circle(MARGIN_X + 4 * mm, y - 3.5 * mm, 3.5 * mm, fill=1, stroke=0)
        c.setFillColor(INK)
        c.setFont("Body-Bold", 6.7)
        c.drawCentredString(MARGIN_X + 4 * mm, y - 5.5 * mm, str(idx + 1))
        y = draw_paragraph(c, step, MARGIN_X + 11 * mm, y, CONTENT_W - 11 * mm, BODY)
        y -= 4 * mm
    h = 30 * mm
    rounded_rect(c, MARGIN_X, y - h, CONTENT_W, h, CORAL_LIGHT, CORAL)
    c.setFillColor(CORAL)
    c.setFont("Body-Bold", 7)
    c.drawString(MARGIN_X + 5 * mm, y - 6 * mm, copy_for(meta, "SAY THIS", "DI ESTO"))
    draw_paragraph(c, f'“{page["script"]}”', MARGIN_X + 5 * mm, y - 11 * mm, CONTENT_W - 10 * mm, SCRIPT)
    y -= h + 7 * mm
    y = draw_paragraph(c, copy_for(meta, "NOTICE", "OBSERVA"), MARGIN_X, y, CONTENT_W, KICKER)
    y -= 3 * mm
    for item in page["observe"]:
        checkbox(c, MARGIN_X, y)
        y = draw_paragraph(c, item, MARGIN_X + 6 * mm, y + 1 * mm, CONTENT_W - 6 * mm, BODY_SMALL)
        y -= 4 * mm
    draw_action(c, meta, page["action"])


def draw_scripts(c: canvas.Canvas, meta: dict[str, str], page: dict[str, Any]) -> None:
    y = draw_heading(c, page)
    count = len(page["scripts"])
    available = y - (BOTTOM_SAFE + 27 * mm)
    box_h = min(27 * mm, available / count - 3 * mm)
    for idx, (scenario, script_text) in enumerate(page["scripts"]):
        fill = SAGE_LIGHT if idx % 2 == 0 else PAPER_2
        rounded_rect(c, MARGIN_X, y - box_h, CONTENT_W, box_h, fill, LINE)
        draw_paragraph(c, scenario, MARGIN_X + 4 * mm, y - 4 * mm, 45 * mm, BOX_TITLE)
        draw_paragraph(c, f'“{script_text}”', MARGIN_X + 52 * mm, y - 4 * mm, CONTENT_W - 57 * mm, BOX_BODY)
        y -= box_h + 3 * mm
    if page.get("safety"):
        y = draw_paragraph(c, page["safety"], MARGIN_X, y, CONTENT_W, BODY_TINY)
    draw_action(c, meta, page["action"])


def draw_routine(c: canvas.Canvas, meta: dict[str, str], page: dict[str, Any]) -> None:
    y = draw_heading(c, page)
    data = [["", copy_for(meta, "STEP", "PASO"), copy_for(meta, "WHAT IT LOOKS LIKE", "CÓMO SE VE")]] + page["rows"]
    table = Table(data, colWidths=[12 * mm, 38 * mm, CONTENT_W - 50 * mm], rowHeights=[11 * mm] + [18 * mm] * len(page["rows"]))
    table.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (-1, 0), "Body-Bold"),
        ("FONTNAME", (0, 1), (1, -1), "Body-Bold"),
        ("FONTNAME", (2, 1), (2, -1), "Body"),
        ("FONTSIZE", (0, 0), (-1, 0), 6.5),
        ("FONTSIZE", (0, 1), (-1, -1), 7.8),
        ("BACKGROUND", (0, 0), (-1, 0), SAGE_LIGHT),
        ("BACKGROUND", (0, 1), (0, -1), MUSTARD_LIGHT),
        ("GRID", (0, 0), (-1, -1), 0.5, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ALIGN", (0, 1), (0, -1), "CENTER"),
        ("TEXTCOLOR", (0, 0), (-1, -1), INK),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
    ]))
    _, th = table.wrap(CONTENT_W, 130 * mm)
    table.drawOn(c, MARGIN_X, y - th)
    y -= th + 8 * mm
    for prompt in page["prompts"]:
        y = draw_paragraph(c, prompt, MARGIN_X, y, CONTENT_W, BODY_BOLD)
        y -= 4 * mm
        line(c, MARGIN_X, y, PAGE_W - MARGIN_X, y)
        y -= 8 * mm
    draw_action(c, meta, page["action"])


def draw_parking(c: canvas.Canvas, meta: dict[str, str], page: dict[str, Any]) -> None:
    y = draw_heading(c, page)
    cols = 2
    for idx, item in enumerate(page["checks"]):
        col = idx % cols
        row = idx // cols
        x = MARGIN_X + col * CONTENT_W / 2
        yy = y - row * 12 * mm
        checkbox(c, x, yy)
        draw_paragraph(c, item, x + 6 * mm, yy + 1 * mm, CONTENT_W / 2 - 8 * mm, BODY)
    y -= 42 * mm
    draw_paragraph(c, page["prompt"], MARGIN_X, y, CONTENT_W, BODY_BOLD)
    line(c, MARGIN_X, y - 8 * mm, PAGE_W - MARGIN_X, y - 8 * mm)
    y -= 19 * mm
    c.setFillColor(INK_SOFT)
    c.setFont("Body-Bold", 7)
    c.drawString(MARGIN_X, y, copy_for(meta, "LABELS", "ETIQUETAS"))
    y -= 7 * mm
    gap = 4 * mm
    w = (CONTENT_W - 2 * gap) / 3
    for idx, label_text in enumerate(page["labels"]):
        col = idx % 3
        row = idx // 3
        x = MARGIN_X + col * (w + gap)
        yy = y - row * 24 * mm
        rounded_rect(c, x, yy - 18 * mm, w, 18 * mm, PAPER_2, LINE)
        draw_paragraph(c, label_text, x + 4 * mm, yy - 5 * mm, w - 8 * mm, BOX_TITLE)
    y -= 57 * mm
    rounded_rect(c, MARGIN_X, y - 29 * mm, CONTENT_W, 29 * mm, SAGE_LIGHT, SAGE)
    draw_paragraph(c, page["note_title"], MARGIN_X + 5 * mm, y - 5 * mm, CONTENT_W - 10 * mm, BOX_TITLE)
    draw_paragraph(c, page["note"], MARGIN_X + 5 * mm, y - 13 * mm, CONTENT_W - 10 * mm, BOX_BODY)
    draw_action(c, meta, page["action"])


def draw_agreement(c: canvas.Canvas, meta: dict[str, str], page: dict[str, Any]) -> None:
    y = draw_heading(c, page)
    for field in page["fields"]:
        y = draw_paragraph(c, field, MARGIN_X, y, CONTENT_W, BODY_BOLD)
        y -= 3.5 * mm
        line(c, MARGIN_X, y, PAGE_W - MARGIN_X, y)
        y -= 7.2 * mm
    y -= 2 * mm
    gap = 6 * mm
    w = (CONTENT_W - 3 * gap) / 4
    for idx, label_text in enumerate(page["signatures"]):
        x = MARGIN_X + idx * (w + gap)
        line(c, x, y, x + w, y, INK_SOFT)
        draw_paragraph(c, label_text, x, y - 2 * mm, w, BODY_TINY)
    draw_paragraph(c, page["note"], MARGIN_X, y - 15 * mm, CONTENT_W, BODY_TINY)
    draw_action(c, meta, page["action"])


def draw_tracker(c: canvas.Canvas, meta: dict[str, str], page: dict[str, Any]) -> None:
    y = draw_heading(c, page)
    data = [page["columns"]] + [[str(i + 1), "", "", "", ""] for i in range(page["rows"])]
    widths = [14 * mm, 28 * mm, 27 * mm, 27 * mm, CONTENT_W - 96 * mm]
    table = Table(data, colWidths=widths, rowHeights=[13 * mm] + [20 * mm] * page["rows"])
    table.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (-1, 0), "Body-Bold"),
        ("FONTNAME", (0, 1), (0, -1), "Display-Bold"),
        ("FONTSIZE", (0, 0), (-1, 0), 6.2),
        ("FONTSIZE", (0, 1), (0, -1), 11),
        ("BACKGROUND", (0, 0), (-1, 0), SAGE_LIGHT),
        ("GRID", (0, 0), (-1, -1), 0.5, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ALIGN", (0, 0), (3, -1), "CENTER"),
        ("TEXTCOLOR", (0, 0), (-1, -1), INK),
    ]))
    _, th = table.wrap(CONTENT_W, 190 * mm)
    table.drawOn(c, MARGIN_X, y - th)
    y -= th + 8 * mm
    for prompt in page["review"]:
        y = draw_paragraph(c, prompt, MARGIN_X, y, CONTENT_W, BODY_BOLD)
        y -= 4 * mm
        line(c, MARGIN_X, y, PAGE_W - MARGIN_X, y)
        y -= 7 * mm
    draw_action(c, meta, page["action"])


def draw_troubleshoot(c: canvas.Canvas, meta: dict[str, str], page: dict[str, Any]) -> None:
    y = draw_heading(c, page)
    data = [[
        copy_for(meta, "WHAT YOU SEE", "QUÉ VES"),
        copy_for(meta, "CHECK FIRST", "REVISA PRIMERO"),
        copy_for(meta, "TRY FOR TWO NIGHTS", "PRUEBA DOS NOCHES"),
    ]] + [list(r) for r in page["rows"]]
    # Use Paragraphs so long Spanish text wraps predictably.
    pdata = []
    for ridx, row in enumerate(data):
        row_style = style(f"Table{ridx}", 6.8 if ridx else 6.2, 8.5, INK, "Body-Bold" if ridx == 0 else "Body")
        pdata.append([Paragraph(cell, row_style) for cell in row])
    table = Table(pdata, colWidths=[42 * mm, 53 * mm, CONTENT_W - 95 * mm], rowHeights=[11 * mm] + [28 * mm] * len(page["rows"]))
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), SAGE_LIGHT),
        ("BACKGROUND", (0, 1), (0, -1), MUSTARD_LIGHT),
        ("GRID", (0, 0), (-1, -1), 0.5, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
    ]))
    _, th = table.wrap(CONTENT_W, 210 * mm)
    table.drawOn(c, MARGIN_X, y - th)
    draw_action(c, meta, page["action"])


def draw_repair(c: canvas.Canvas, meta: dict[str, str], page: dict[str, Any]) -> None:
    y = draw_heading(c, page)
    for idx, (title, body) in enumerate(page["steps"]):
        h = 20 * mm
        c.setFillColor(CORAL if idx in (1, 3) else SAGE)
        c.circle(MARGIN_X + 4 * mm, y - 7 * mm, 4 * mm, fill=1, stroke=0)
        c.setFillColor(INK)
        c.setFont("Body-Bold", 7)
        c.drawCentredString(MARGIN_X + 4 * mm, y - 9.2 * mm, str(idx + 1))
        draw_paragraph(c, title, MARGIN_X + 12 * mm, y - 2 * mm, 38 * mm, BOX_TITLE)
        draw_paragraph(c, body, MARGIN_X + 53 * mm, y - 2 * mm, CONTENT_W - 53 * mm, BOX_BODY)
        line(c, MARGIN_X + 12 * mm, y - h, PAGE_W - MARGIN_X, y - h)
        y -= h + 3 * mm
    rounded_rect(c, MARGIN_X, y - 28 * mm, CONTENT_W, 28 * mm, CORAL_LIGHT, CORAL)
    draw_paragraph(c, f'“{page["script"]}”', MARGIN_X + 5 * mm, y - 6 * mm, CONTENT_W - 10 * mm, SCRIPT)
    draw_action(c, meta, page["action"])


def draw_sources(c: canvas.Canvas, meta: dict[str, str], page: dict[str, Any]) -> None:
    y = draw_heading(c, page)
    for org, title_text, url in page["sources"]:
        h = 31 * mm
        rounded_rect(c, MARGIN_X, y - h, CONTENT_W, h, PAPER_2, LINE)
        draw_paragraph(c, org, MARGIN_X + 5 * mm, y - 5 * mm, CONTENT_W - 10 * mm, BOX_TITLE)
        draw_paragraph(c, title_text, MARGIN_X + 5 * mm, y - 13 * mm, CONTENT_W - 10 * mm, BODY_SMALL)
        draw_paragraph(c, url, MARGIN_X + 5 * mm, y - 21 * mm, CONTENT_W - 10 * mm, BODY_TINY)
        c.linkURL("https://" + url, (MARGIN_X, y - h, PAGE_W - MARGIN_X, y), relative=0)
        y -= h + 4 * mm
    y -= 2 * mm
    y = draw_paragraph(c, page["scope"], MARGIN_X, y, CONTENT_W, BODY_TINY)
    y -= 6 * mm
    rounded_rect(c, MARGIN_X, y - 27 * mm, CONTENT_W, 27 * mm, MUSTARD_LIGHT, MUSTARD)
    draw_paragraph(c, page["closing"], MARGIN_X + 5 * mm, y - 7 * mm, CONTENT_W - 10 * mm, style("Closing", 10.2, 14, INK, "Display-Bold"))


DRAWERS = {
    "cover": draw_cover,
    "quickstart": draw_quickstart,
    "content": draw_content,
    "worksheet": draw_worksheet,
    "timeline": draw_timeline,
    "menu": draw_menu,
    "meeting": draw_meeting,
    "daily": draw_daily,
    "scripts": draw_scripts,
    "routine": draw_routine,
    "parking": draw_parking,
    "agreement": draw_agreement,
    "tracker": draw_tracker,
    "troubleshoot": draw_troubleshoot,
    "repair": draw_repair,
    "sources": draw_sources,
}


def build_pdf(path: Path, meta: dict[str, str], pages: list[dict[str, Any]]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(path), pagesize=A4, pageCompression=1)
    c.setTitle(meta["title"])
    c.setSubject(meta["subtitle"])
    c.setAuthor("School-Night Screen Reset")
    total = len(pages)
    for idx, page in enumerate(pages, start=1):
        is_cover = page["type"] == "cover"
        draw_page_chrome(c, meta, idx, total, is_cover)
        drawer = DRAWERS.get(page["type"])
        if drawer is None:
            raise ValueError(f"Unknown page type: {page['type']}")
        drawer(c, meta, page)
        if not is_cover and page["type"] != "sources":
            c.setFillColor(INK_SOFT)
            c.setFont("Body", 5.7)
            c.drawString(MARGIN_X, 18.2 * mm, meta["disclaimer"])
        c.showPage()
    c.save()


def main() -> None:
    register_fonts()
    out = ROOT / "output" / "pdf"
    build_pdf(out / "school-night-screen-reset-en.pdf", EN_META, EN_PAGES)
    build_pdf(out / "school-night-screen-reset-es.pdf", ES_META, ES_PAGES)
    print(f"Built {len(EN_PAGES)} English pages and {len(ES_PAGES)} Spanish pages in {out}")


if __name__ == "__main__":
    main()
