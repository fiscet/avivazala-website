import { ReactNode } from 'react';
import ContentWrapper from './ContentWrapperComponent';
import MobileMenuButton from './MobileMenuButtonComponent';

export type MobileMainNavbarComponentProps = {
  children: ReactNode;
};

export default function MobileMainNavbarComponent({
  children,
}: MobileMainNavbarComponentProps) {
  return (
    <div className="navbar m-0 p-0 lg:hidden">
      <div className="navbar-start">
        <div className="dropdown">
          <ContentWrapper y={false}>
            <MobileMenuButton />
            {children}
          </ContentWrapper>
        </div>
      </div>
    </div>
  );
}
