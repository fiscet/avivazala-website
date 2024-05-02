import { getMainMenu } from "@lib/sanity/fetchers";
import { FullNavigation, LocalizedField, WebsiteMenu, WebsiteMenuItem } from "types/local.types";
import { LocaleSlug, LocaleString, NavigationItem, Page, Post } from "types/sanity.types";

export class SanityMenuBuilder {
  private locale: string;
  private allRefPostPages?: Partial<Page | Post>[];
  private finalMenu: WebsiteMenu = { items: [] };

  constructor(locale: string) {
    this.locale = locale;
    this.start();
  }

  private async start() {
    const sanityNavigation = await getMainMenu();

    this.allRefPostPages = [...sanityNavigation.pages, ...sanityNavigation.subpages];
    this.allRefPostPages = this.allRefPostPages.filter(item => item);

    this.finalMenu.items = this.parseNavigationItemsArray(sanityNavigation.items as NavigationItem[]);
  }

  private parseNavigationItemsArray = (navigationItems: NavigationItem[]) => {
    return navigationItems.map((navigationItem) => {

      const newItem = this.parseNavigationItem(navigationItem, this.allRefPostPages);

      if (navigationItem.navigationItemLink?.submenu) {
        newItem.submenu = this.parseNavigationItemsArray(navigationItem.navigationItemLink?.submenu);
      }

      return newItem;
    });
  };

  private parseNavigationItem = (navigationItem: NavigationItem, pages?: FullNavigation["pages"]): WebsiteMenuItem => {
    const label = this.getLocalizedField(navigationItem?.title as LocaleString, this.locale);
    let linkTo = '#';

    const { navigationItemLink } = navigationItem;

    if (navigationItemLink?.externalUrl) {
      linkTo = navigationItemLink.externalUrl;
    }

    if (navigationItemLink?.internalLink && pages) {
      const id = navigationItemLink.internalLink._ref;

      const page = pages.find(item => { return item._id === id; });

      linkTo = `/${this.locale}/${this.getLocalizedField(page?.slug as LocaleSlug, this.locale, true)}`;
    }

    return {
      label,
      linkTo
    };
  };

  private getLocalizedField = (localizedField: LocalizedField, locale: string, isSlug = false) => {
    let newItem: string = '';

    const fieldArray = Object.entries(localizedField);

    fieldArray.forEach(item => {
      if (item[0] === locale) {
        newItem = isSlug ? item[1].current : item[1];
      }
    });

    return newItem;
  };
}
