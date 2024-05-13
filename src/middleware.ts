import { defaultLocale, locales } from '@lib/i18n';
import createMiddleware from 'next-intl/middleware';

const middleware = createMiddleware({
  // Add locales you want in the app
  locales,

  // Default locale if no match
  defaultLocale: 'hu',

  localePrefix: 'always',
  localeDetection: false
});

export default middleware;

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(hu|en)/:page*', '/(hu|en)/blog/:page*']
};
