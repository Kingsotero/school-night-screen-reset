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

for (const page of [
  {
    path: "/en",
    title: "7-Day School-Night Screen Reset",
    headline: "Make the screen handoff clear before everyone is tired.",
    cta: "Start the 7-night reset",
  },
  {
    path: "/es",
    title: "Reinicio de pantallas en 7 noches escolares",
    headline: "Aclara el final de las pantallas antes de que todos estén cansados.",
    cta: "Empezar el plan de 7 noches",
  },
]) {
  test(`server-renders ${page.path}`, async () => {
    const response = await render(page.path);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.match(html, new RegExp(page.title, "i"));
    assert.match(html, new RegExp(page.headline.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(html, new RegExp(page.cta));
    assert.match(html, /\$12 USD/);
    assert.match(html, /29 (printable A4 pages|páginas A4 imprimibles)/i);
    assert.match(html, /\/product\/(en|es)-cover\.webp/);
    assert.doesNotMatch(html, /react-loading-skeleton|Your site is taking shape/i);
  });
}
