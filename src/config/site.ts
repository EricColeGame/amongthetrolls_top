export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Among the Trolls Wiki",
  shortName: "Among the Trolls",
  logoText: "AT",
  tagline: "Survival, Crafting & Finnish Mythology Guides",
  description: "Explore Among the Trolls with survival tips, crafting guides, Finnish mythology, forest exploration walkthroughs, gameplay details, and the latest game news.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://amongthetrolls.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://amongthetrolls.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/1675260/Among_the_Trolls/",
  heroVideoId: "EwIQBA0omco", // Official Among the Trolls trailer (505 Pulse / AvantGarden Games)
  social: {
    discord: "https://discord.gg/fkC24Q3ymj",
    youtube: "https://www.youtube.com/@505Pulse",
    twitter: "https://x.com/AmongTheTrolls",
    tiktok: "https://www.tiktok.com/@amongthetrolls",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
