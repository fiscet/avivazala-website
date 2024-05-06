import React from 'react';
import Image from 'next/image';
import Search from './Search';
import MainNavbarMobile from './MobileMainNavbarComponent';
import MainNavbarDesktop from './DesktopMainNavbarComponent';
import MobileMenu from './MobileMainMenuComponent';
import DesktopMainMenu from './DesktopMainMenuComponent';
import { SanityMenuBuilder } from 'helpers/SanityMenuBuilder';
import LangSwitcher from './LangSwitcher';
import { Locale } from '@lib/i18n';

export default async function HeaderComponent({ locale }: { locale: Locale }) {
  const menuBuilder = new SanityMenuBuilder(locale);

  const menu = await menuBuilder.getMenuData();

  return (
    <header
      style={{ backgroundImage: 'url(/img/bgTop.jpg)' }}
      className={`lg:h-56 bg-no-repeat bg-[length:900px] lg:bg-auto flex flex-col relative`}>
      <div className="grow flex items-center flex-col justify-between lg:flex-row">
        <div className="hidden lg:block w-2/6"></div>
        <div className="mt-[100px] ml-[50px] lg:mt-10 lg:ml-18">
          <Image src="/img/payoff.png" width={227} height={67} alt="Payoff" />
        </div>
        <div className="hidden lg:block">
          <Search />
        </div>
      </div>
      <div className="flex justify-between lg:hidden">
        <MainNavbarMobile>
          <MobileMenu menu={menu} />
        </MainNavbarMobile>
        <Search />
      </div>
      <MainNavbarDesktop>
        <DesktopMainMenu menu={menu} />
      </MainNavbarDesktop>
      <div className="absolute right-[10px] top-[10px]">
        <LangSwitcher currentLocale={locale} />
      </div>
    </header>
  );
}
