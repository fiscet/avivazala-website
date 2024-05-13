import { slugPerType } from "@lib/config";
import { getMainMenu } from "@sanityLib/fetchers";
import { FullNavigation, LocalizedField, NavigationItemWithKey, WebsiteMenu, WebsiteMenuItem } from "types/local.types";
import { LocaleSlug, LocaleString, Page, Post } from "types/sanity.types";

export class SanityMenuBuilder {
  private locale: string;
  private allRefPostPages?: Partial<Page | Post>[];
  private finalMenu: WebsiteMenu = { items: [] };

  constructor(locale: string) {
    this.locale = locale;
  }

  public async getMenuData() {
    const sanityNavigation = await getMainMenu();

    this.allRefPostPages = [...sanityNavigation!.pages, ...sanityNavigation!.subpages];
    this.allRefPostPages = this.allRefPostPages.filter(item => item);


    this.finalMenu.items = this.parseNavigationItems(sanityNavigation!.items as NavigationItemWithKey[]);

    return this.finalMenu;
  }

  private parseNavigationItems = (navigationItems: NavigationItemWithKey[]) => {
    return navigationItems.map((navigationItem) => {

      const newItem = this.parseNavigationItem(navigationItem, this.allRefPostPages);

      if (navigationItem.navigationItemLink?.submenu) {
        newItem.submenu = this.parseNavigationItems(navigationItem.navigationItemLink?.submenu);
      }

      return newItem;
    });
  };

  private parseNavigationItem = (navigationItem: NavigationItemWithKey, pages?: FullNavigation["pages"]): WebsiteMenuItem => {
    const label = this.getLocalizedField(navigationItem?.title as LocaleString, this.locale);
    let id = '';
    let linkTo = '#';

    const { navigationItemLink } = navigationItem;

    if (navigationItemLink?.externalUrl) {
      id = navigationItemLink.externalUrl;
      linkTo = navigationItemLink.externalUrl;
    }

    if (navigationItemLink?.internalLink && pages) {
      const id = navigationItemLink.internalLink._ref;

      const page = pages.find(item => { return item._id === id; });

      let slugTrunk = slugPerType.get(page!._type!);
      slugTrunk = slugTrunk ? `${slugTrunk}/` : '';

      linkTo = `/${slugTrunk}${this.getLocalizedField(page?.slug as LocaleSlug, this.locale, true)}`;
    }

    return {
      id: navigationItem._key,
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
