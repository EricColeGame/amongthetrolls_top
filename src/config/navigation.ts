import { BookOpen, CalendarClock, Cog, Gamepad2, PlayCircle, Users } from "lucide-react";

export type NavItem = {
  key: string;
  path: `/${string}`;
  icon: import("lucide-react").LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "release", path: "/release", icon: CalendarClock, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cog, isContentType: true },
  { key: "platforms", path: "/platforms", icon: Gamepad2, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
  { key: "media", path: "/media", icon: PlayCircle, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
