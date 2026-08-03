# School-Night Screen Reset

A bilingual low-ticket product and conversion landing page for families with children ages 6–12.

## Included

- English sales page at `/en`
- Spanish sales page at `/es`
- English and Spanish 29-page printable PDF editions in `output/pdf/`
- Real product-page previews in `public/product/`
- Responsive, accessible layout with localized metadata

## Local development

```bash
npm install
npm run dev
```

The app runs on Vinext. The root route redirects to `/en`.

## Netlify

Netlify uses the native Next.js build through `npm run build:netlify`. The
`netlify.toml` file keeps this separate from the Vinext build used by Sites.

## Purchase URL

Set `NEXT_PUBLIC_PURCHASE_URL` to the destination that should open from every purchase button. When it is not set, calls to action scroll to the final offer section so the page remains reviewable without a broken external link.

## Verification

```bash
npm test
```

To rebuild and verify the product PDFs with the bundled Python environment:

```powershell
python scripts/build_pdfs.py
python scripts/verify_pdfs.py
```
