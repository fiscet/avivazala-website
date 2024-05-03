import { WebsiteMenu } from 'types/local.types';
import MainMenuItem from './MainMenuItem';

export type DesktopMenuComponentProps = {
  menu: WebsiteMenu;
};

export default function DesktopMenuComponent({
  menu,
}: DesktopMenuComponentProps) {
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
