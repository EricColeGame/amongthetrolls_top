import { defineRouting } from "next-intl/routing";
import { siteConfig } from "@/config/site";

export const locales = ["en", "de", "fr", "ko"] as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: siteConfig.defaultLocale as Locale,
  localePrefix: "always",
  localeDetection: false,
});
