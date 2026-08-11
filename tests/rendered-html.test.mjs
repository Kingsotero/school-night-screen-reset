import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
      redirect: "manual",
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("redirects the root route to the English edition", async () => {
  const response = await render("/");
  assert.ok([307, 308].includes(response.status));
  assert.match(response.headers.get("location") ?? "", /\/en$/);
});

const literal = (value) => new RegExp(value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

for (const page of [
  {
    path: "/en",
    title: "7-Day School-Night Screen Reset",
    headline: "End the nightly screen fight in seven nights.",
    cta: "Get the kit — $12",
    guarantee: "15-day money-back guarantee",
  },
  {
    path: "/es",
    title: "Reinicio de pantallas en 7 noches escolares",
    headline: "Acaba con la pelea de las pantallas en siete noches.",
    cta: "Obtener el kit — $12",
    guarantee: "Garantía de 15 días",
  },
]) {
  test(`server-renders ${page.path}`, async () => {
    const response = await render(page.path);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.match(html, new RegExp(page.title, "i"));
    assert.match(html, literal(page.headline));
    assert.match(html, literal(page.cta));
    assert.match(html, /\$12 USD/);
    assert.match(html, /29 (printable A4 pages|páginas A4 imprimibles)/i);
    assert.match(html, /\/product\/(en|es)-cover\.webp/);
    assert.doesNotMatch(html, /react-loading-skeleton|Your site is taking shape/i);

    // Conversion elements that must never silently disappear from the page.
    assert.match(html, literal(page.guarantee));
    assert.match(html, /class="purchase-bar"/);
    assert.match(html, /class="hero-price"/);
  });
}

test("every purchase control is tagged for InitiateCheckout tracking", async () => {
  const html = await (await render("/en")).text();
  const buttons = html.match(/data-purchase/g) ?? [];
  // header, hero, free-scripts, final offer, sticky bar
  assert.ok(buttons.length >= 5, `expected 5+ tagged CTAs, found ${buttons.length}`);
});
