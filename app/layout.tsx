import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import AuthProvider from "./contexts/AuthProvider";
import { getDictionary } from "./dictionaries";
import { i18n } from "./i18n-config";
import Script from "next/script";
import { TranslationProvider } from "@/app/contexts/TranslationProvider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmsans",
});

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = await getDictionary(lang as "en" | "fr" | "ar");

  return {
    title: "tabarro3",
    description: dict.metadata.description,
    openGraph: {
      title: "tabarro3",
      description: dict.metadata.description,
      url: "https://tabarro3.ma",
      siteName: "tabarro3",
      images: [
        {
          url: "https://tabarro3.ma/og-image.png",
          width: 1200,
          height: 630,
          alt: "tabarro3 - Give Blood, Save Lives",
        },
      ],
      locale: lang,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "tabarro3",
      description: dict.metadata.description,
      images: ["https://tabarro3.ma/og-image.png"],
    },
  };
}

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dict = await getDictionary(lang as "en" | "fr" | "ar");

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <head>
        <Script id="preload-translations" strategy="beforeInteractive">
          {`window.__TRANSLATIONS__ = ${JSON.stringify(dict)};`}
        </Script>
      </head>
      <body className={dmSans.className}>
        <TranslationProvider lang={lang}>
          <AuthProvider>{children}</AuthProvider>
        </TranslationProvider>
      </body>
    </html>
  );
}
