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
      {/* <li>
        <a>Item 11</a>
      </li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2" style={{ marginTop: '4px' }}>
            <li>
              <a>Submenu 11</a>
            </li>
            <li>
              <a>Submenu 22</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Item 33</a>
      </li> */}
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
