import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import AuthProvider from "./contexts/AuthProvider";
import { getDictionary } from "./dictionaries";
import { i18n } from "./i18n-config";

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
    title: "tabaro3",
    description: dict.metadata.description,
    openGraph: {
      title: "tabaro3",
      description: dict.metadata.description,
      url: "https://tabaro3.vercel.app",
      siteName: "tabaro3",
      images: [
        {
          url: "https://tabaro3.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "tabaro3 - Give Blood, Save Lives",
        },
      ],
      locale: lang,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "tabaro3",
      description: dict.metadata.description,
      images: ["https://tabaro3.vercel.app/og-image.png"],
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
      <body className={dmSans.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
