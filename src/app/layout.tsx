import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const where = site.city ? ` ${site.city}` : "";
const title = `Fizjoterapeuta${where} | Akupunktura i masaż | ${site.name}`;
const description =
  "Akupunktura, masaż przeciwbólowy, masaż poprawiający mobilność, relaksacyjny i tradycyjny. Terapia dobrana do Twojego ciała. Umów wizytę.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pl_PL",
    siteName: site.brand,
  },
};

export const viewport: Viewport = {
  themeColor: "#0c1a15",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${display.variable} ${body.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
