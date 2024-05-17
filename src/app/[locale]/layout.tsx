import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { Ubuntu } from 'next/font/google';
import 'globals.css';
import Header from '@components/Header';
import ContentWrapper from '@components/ContentWrapper';
import { Locale, defaultLocale } from '@lib/i18n';
import LiveVisualEditing from '@components/LiveVisualEditing';

export const metadata: Metadata = {
  icons: {
    icon: [
      '/img/favicon.jpg',
      '/img/favicon57.png',
      '/img/favicon72.png',
      '/img/favicon114.png',
      '/img/favicon144.png',
    ],
  },
};

const baseFont = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  const locale = (params.locale || defaultLocale) as Locale;

  return (
    <html lang={params.locale} data-theme="nord">
      <body className={baseFont.className}>
        <div className="container h-full min-h-lvh mx-auto bg-white">
          <Header locale={locale} />
          <ContentWrapper>{children}</ContentWrapper>
          {draftMode().isEnabled && <LiveVisualEditing />}
        </div>
      </body>
    </html>
  );
}
