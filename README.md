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

**This must be set before running paid traffic.** Without it the buy buttons are
dead anchors and no one can complete a purchase.

## Tracking

Both are inlined at build time, so changing either requires a redeploy, not just
an env var update.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel. Fires `PageView`, `ViewContent`, and `InitiateCheckout` on any `[data-purchase]` CTA. Renders nothing when unset. |
| — | UTMify UTM script is hardcoded in `app/layout.tsx` and needs no configuration. |

`Purchase` is intentionally not tracked in the browser. Checkout is off-domain on
Hotmart/Kiwify, and UTMify reports the sale server-side from the platform
webhook. Adding a browser-side `Purchase` here would double-count.

## Verification

```bash
npm test
```

To rebuild and verify the product PDFs with the bundled Python environment:

```powershell
python scripts/build_pdfs.py
python scripts/verify_pdfs.py
```
