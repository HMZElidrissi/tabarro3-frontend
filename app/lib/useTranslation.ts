"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { i18n } from "../i18n-config";
import type { Locale } from "../i18n-config";

type Dictionary = { [key: string]: string };

export const useTranslation = () => {
  const params = useParams();
  const [dictionary, setDictionary] = useState<Dictionary>({});
  const lang = (params?.lang as Locale) || i18n.defaultLocale;

  useEffect(() => {
    import(`@/dictionaries/${lang}.json`)
      .then((module) => {
        setDictionary(module.default);
      })
      .catch((error) => {
        console.error(`Error loading dictionary for locale '${lang}':`, error);
        // Fallback to default locale if there's an error
        if (lang !== i18n.defaultLocale) {
          import(`@/dictionaries/${i18n.defaultLocale}.json`)
            .then((module) => setDictionary(module.default))
            .catch((error) =>
              console.error(`Error loading fallback dictionary:`, error),
            );
        }
      });
  }, [lang]);

  const t = (key: string): string => {
    if (!dictionary) {
      console.warn("Dictionary not loaded yet");
      return key;
    }
    return dictionary[key] || key;
  };

  return { t, lang };
};
