import Link from 'next/link';
import { ReactNode } from 'react';

export type MainMenuItemProps = {
  id: string;
  label: string;
  linkTo: string;
  submenu?: MainMenuItemProps[];
  isDesktop?: boolean;
};

const MobileItem = ({ label, linkTo, submenu }: MainMenuItemProps) => {
  return (
    <>
      <Link href={linkTo} title={label}>
        {label}
      </Link>
      {submenu && submenu.length && (
        <ul className="p-2" style={{ marginTop: '4px' }}>
          {submenu.map((subMenuItem) => (
            <MainMenuItem
              id={subMenuItem.id}
              label={subMenuItem.label}
              linkTo={subMenuItem.linkTo}
              key={subMenuItem.id}
            />
          ))}
        </ul>
      )}
    </>
  );
};
const DesktopItem = ({ label, submenu }: MainMenuItemProps) => {
  return (
    <details>
      <summary>{label}</summary>
      {submenu && submenu.length && (
        <ul className="p-2" style={{ marginTop: '4px' }}>
          {submenu.map((subMenuItem) => (
            <MainMenuItem
              id={subMenuItem.id}
              label={subMenuItem.label}
              linkTo={subMenuItem.linkTo}
              key={subMenuItem.id}
            />
          ))}
        </ul>
      )}
    </details>
  );
};

export default function MainMenuItem(props: MainMenuItemProps): ReactNode {
  return (
    <li>
      {props.isDesktop && props.submenu?.length ? (
        <DesktopItem {...props} />
      ) : (
        <MobileItem {...props} />
      )}
    </li>
  );
}
