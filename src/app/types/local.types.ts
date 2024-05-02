import { LocaleSlug, LocaleString, LocaleText, Navigation, NavigationItem, Page, Post } from "./sanity.types";

export type FullNavigation = Partial<Navigation> & {
  pages: Partial<Page | Post>[],
  subpages: Partial<Page | Post>[];
};

export type WebsiteMenuItem = {
  label: string;
  linkTo: string;
  submenu?: WebsiteMenuItem[];
};

export type WebsiteMenu = {
  items: WebsiteMenuItem[];
};

export type LocalizedField = LocaleString | LocaleText | LocaleSlug;