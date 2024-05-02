import { ReactNode } from 'react';

type DesktopMainNavbarComponentProps = {
  children: ReactNode
}

export default function DesktopMainNavbarComponent({children}: DesktopMainNavbarComponentProps) {
  return (
    <div className="navbar m-0 p-0 justify-center hidden lg:flex">
      <div className="navbar-center hidden lg:flex">
        {children}
      </div>
    </div>
  );
}
