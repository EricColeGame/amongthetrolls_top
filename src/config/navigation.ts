export type NavItem = {
  key: string;
  path: string;
  icon: import("lucide-react").LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG: NavItem[] = [];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
