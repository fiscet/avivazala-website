import ContentWrapper from './ContentWrapperComponent';
import MobileMenu from './MobileMainMenuComponent';
import MobileMenuButton from './MobileMenuButtonComponent';

export default function MobileMainNavbarComponent() {
  return (
    <div className="navbar m-0 p-0 lg:hidden">
      <div className="navbar-start">
        <div className="dropdown">
          <ContentWrapper y={false}>
            <MobileMenuButton />
            <MobileMenu />
          </ContentWrapper>
        </div>
      </div>
    </div>
  );
}
