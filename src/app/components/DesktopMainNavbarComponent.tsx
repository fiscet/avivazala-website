import DesktopMainMenu from './DesktopMainMenuComponent';

export default function DesktopMainNavbarComponent() {
  return (
    <div className="navbar m-0 p-0 justify-center hidden lg:flex">
      <div className="navbar-center hidden lg:flex">
        <DesktopMainMenu />
      </div>
    </div>
  );
}
