export const i18n = {
  defaultLocale: "fr",
  locales: ["en", "fr", "ar"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
