import { ReactNode } from 'react';
import ContentWrapper from './ContentWrapper';
import MobileMenuButton from './MobileMenuButton';

export type MobileMainNavbarProps = {
  children: ReactNode;
};

export default function MobileMainNavbar({ children }: MobileMainNavbarProps) {
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
