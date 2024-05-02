import createMiddleware from 'next-intl/middleware';

const middleware = createMiddleware({
  // Add locales you want in the app
  locales: ['hu', 'en'],

  // Default locale if no match
  defaultLocale: 'hu'
});

export default middleware;

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(hu|en)/:page*']
};