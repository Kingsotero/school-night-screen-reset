import type { Metadata } from "next";
import { SalesPage } from "../components/SalesPage";

export const metadata: Metadata = {
  title: "7-Day School-Night Screen Reset",
  description: "Set one clear school-night screen boundary with a ten-minute start, seven nightly steps, exact scripts, and 29 printable pages.",
  alternates: {
    canonical: "/en",
    languages: { en: "/en", es: "/es" },
  },
  openGraph: {
    title: "Make the screen handoff clear before everyone is tired",
    description: "A seven-night printable action kit for families with children ages 6–12.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-screen-reset.png", width: 1200, height: 630 }],
  },
};

export default function EnglishSalesPage() {
  return <SalesPage locale="en" />;
}
