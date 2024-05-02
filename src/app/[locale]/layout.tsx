import React, { ReactNode } from 'react';
import { Ubuntu } from 'next/font/google';
import '../globals.css';
import Header from '@components/HeaderComponent';
import ContentWrapper from '@components/ContentWrapperComponent';
import { defaultLocale } from '@lib/constants';

const baseFont = Ubuntu({
  subsets: ['latin'],
  weight: '300',
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: any;
}>) {
  const locale = params.locale || defaultLocale;

  return (
    <html lang={params.locale} data-theme="nord">
      <body className={baseFont.className}>
        <div className="container h-lvh mx-auto bg-white">
          <Header locale={locale} />
          <ContentWrapper>{children}</ContentWrapper>
        </div>
      </body>
    </html>
  );
}
