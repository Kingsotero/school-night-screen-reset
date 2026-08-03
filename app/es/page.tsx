import type { Metadata } from "next";
import { SalesPage } from "../components/SalesPage";

export const metadata: Metadata = {
  title: "Reinicio de pantallas en 7 noches escolares",
  description: "Pon un límite claro a las pantallas con un inicio de diez minutos, siete pasos, frases exactas y 29 páginas imprimibles.",
  alternates: {
    canonical: "/es",
    languages: { en: "/en", es: "/es" },
  },
  openGraph: {
    title: "Aclara el final de las pantallas antes de que todos estén cansados",
    description: "Un kit imprimible de siete noches para familias con niños de 6 a 12 años.",
    type: "website",
    locale: "es_419",
    images: [{ url: "/og-screen-reset.png", width: 1200, height: 630 }],
  },
};

export default function SpanishSalesPage() {
  return <SalesPage locale="es" />;
}
