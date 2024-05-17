import { WebsiteMenu } from 'types/extended-sanity.types';
import MainMenuItem from './MainMenuItem';

export type MobileMenuProps = {
  menu: WebsiteMenu;
};

export default function MobileMenu({ menu }: MobileMenuProps) {
  return (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {menu.items.map((menuItem) => {
        return (
          <MainMenuItem
            id={menuItem.id}
            label={menuItem.label}
            linkTo={menuItem.linkTo}
            submenu={menuItem.submenu}
            key={menuItem.id}
          />
        );
      })}
    </ul>
  );
}
