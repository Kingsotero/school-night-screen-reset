/* eslint-disable @next/next/no-img-element -- Meta's noscript fallback must be a raw 1x1 tracking pixel; next/image would rewrite the URL and break it. */

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

// Browser-side Meta Pixel. Renders nothing unless NEXT_PUBLIC_META_PIXEL_ID is set,
// so the page stays clean until a real pixel is configured.
//
// Purchase is deliberately NOT tracked here. Checkout happens off-domain on
// Hotmart/Kiwify, and UTMify sends Purchase server-side from the sale webhook.
// Firing it from the browser too would double-count.
export function MetaPixel({ locale }: { locale: "en" | "es" }) {
  if (!PIXEL_ID) return null;

  const init = `
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${PIXEL_ID}');
fbq('track','PageView');
// ViewContent is a real mid-funnel signal, not a duplicate of PageView: it only
// fires once the visitor has engaged (half the page scrolled, or 25s on it).
// That gives Meta something to optimize toward between landing and checkout.
(function(){
  var sent=false;
  function engaged(){
    if(sent||!window.fbq)return;
    sent=true;
    fbq('track','ViewContent',{content_name:'School-Night Screen Reset',content_ids:['screen-reset-${locale}'],content_type:'product',value:12.00,currency:'USD'});
    window.removeEventListener('scroll',onScroll);
  }
  function onScroll(){
    var h=document.documentElement;
    var max=h.scrollHeight-window.innerHeight;
    if(max<=0||(window.scrollY+window.innerHeight)/h.scrollHeight>=0.5)engaged();
  }
  window.addEventListener('scroll',onScroll,{passive:true});
  setTimeout(engaged,25000);
  onScroll();
})();
document.addEventListener('click',function(ev){
  var el=ev.target&&ev.target.closest?ev.target.closest('[data-purchase]'):null;
  if(!el||!window.fbq)return;
  fbq('track','InitiateCheckout',{content_name:'School-Night Screen Reset',content_ids:['screen-reset-${locale}'],content_type:'product',value:12.00,currency:'USD'});
});`.trim();

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: init }} />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
