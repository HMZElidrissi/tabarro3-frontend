import "server-only";
import type { Locale } from "./i18n-config";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  fr: () => import("@/dictionaries/fr.json").then((module) => module.default),
  ar: () => import("@/dictionaries/ar.json").then((module) => module.default),
} as const;

export const getDictionary = async (locale: Locale | undefined) => {
  if (!locale || !(locale in dictionaries)) {
    console.warn(`Locale '${locale}' not supported, falling back to 'fr'`);
    return dictionaries.fr();
  }
  return dictionaries[locale as keyof typeof dictionaries]();
};
