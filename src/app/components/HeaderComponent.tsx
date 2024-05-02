import React from 'react';
import Image from 'next/image';
import Search from './Search';
import MainNavbarMobile from './MobileMainNavbarComponent';
import MainNavbarDesktop from './DesktopMainNavbarComponent';
import MobileMenu from './MobileMainMenuComponent';
import DesktopMainMenu from './DesktopMainMenuComponent';
import { SanityMenuBuilder } from 'helpers/parseSanityMenu';
import Link from 'next/link';

export default async function HeaderComponent({ locale }: { locale: string }) {
  const menuBulder = new SanityMenuBuilder(locale);

  return (
    <header
      style={{ backgroundImage: 'url(/img/bgTop.jpg)' }}
      className={`lg:h-56 bg-no-repeat bg-[length:900px] lg:bg-auto flex flex-col`}>
      <div className="grow flex items-center flex-col justify-between lg:flex-row">
        <div className="hidden lg:block"></div>
        <div className="mt-[100px] ml-[100px] lg:mt-10 lg:ml-18">
          <Image src="/img/payoff.png" width={227} height={67} alt="Payoff" />
        </div>
        <div className="hidden lg:block">
          <Search />
          <Link locale="en" href="/en">
            Switch to EN
          </Link>
          <Link locale="hu" href="/hu">
            Switch to HU
          </Link>
        </div>
      </div>
      <div className="flex justify-between lg:hidden">
        <MainNavbarMobile>
          <MobileMenu />
        </MainNavbarMobile>
        <Search />
      </div>
      <MainNavbarDesktop>
        <DesktopMainMenu />
      </MainNavbarDesktop>
    </header>
  );
}
