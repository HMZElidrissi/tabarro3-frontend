"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { getDictionary } from "@/app/dictionaries";
import { PageSkeleton } from "@/app/ui/components/loading";

declare global {
  interface Window {
    __TRANSLATIONS__?: any;
  }
}

const TranslationContext = createContext<any>(null);

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}

export function TranslationProvider({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) {
  const [translations, setTranslations] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = async () => {
      const dict = await getDictionary(lang as "en" | "fr" | "ar");
      setTranslations(dict);
      setIsLoading(false);
    };

    if (typeof window !== "undefined" && window.__TRANSLATIONS__) {
      setTranslations(window.__TRANSLATIONS__);
      setIsLoading(false);
    } else {
      loadTranslations();
    }
  }, [lang]);

  if (isLoading) {
    return <PageSkeleton />;
  }

  const t = (key: string) => {
    const keys = key.split(".");
    return keys.reduce((obj, k) => obj?.[k], translations) || key;
  };

  return (
    <TranslationContext.Provider value={{ t, lang }}>
      {children}
    </TranslationContext.Provider>
  );
}
