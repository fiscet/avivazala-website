import Image from 'next/image';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import ContentWrapper from './ContentWrapper';

export default function Header() {
  return (
    <header
      style={{ backgroundImage: 'url(/img/bgTop.jpg)' }}
      className={`lg:h-56 bg-no-repeat bg-[length:900px] lg:bg-auto flex flex-col`}
    >
      <div className="grow flex items-center flex-col justify-between lg:flex-row">
        <div className="hidden lg:block"></div>
        <div className="mt-[100px] ml-[100px] lg:mt-10 lg:ml-18">
          <Image src="/img/payoff.png" width={227} height={67} alt="Payoff" />
        </div>
        <div className="hidden lg:block">Desktop Search</div>
      </div>
      <div className="flex justify-between">
        <div className="navbar lg:justify-center">
          <div className="navbar-start pl-8 lg:hidden">
            <div className="dropdown">
              <MobileMenuButton />
              <MobileMenu />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <DesktopMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
