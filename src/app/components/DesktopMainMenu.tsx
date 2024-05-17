import { WebsiteMenu } from 'types/extended-sanity.types';
import MainMenuItem from './MainMenuItem';

export type DesktopMenuProps = {
  menu: WebsiteMenu;
};

export default function DesktopMenu({ menu }: DesktopMenuProps) {
  return (
    <ul className="menu menu-horizontal px-1">
      {menu.items.map((menuItem) => {
        return (
          <MainMenuItem
            id={menuItem.id}
            label={menuItem.label}
            linkTo={menuItem.linkTo}
            submenu={menuItem.submenu}
            isDesktop={true}
            key={menuItem.id}
          />
        );
      })}
    </ul>
  );
}
