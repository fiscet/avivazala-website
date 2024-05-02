import nextIntl from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [`cdn.sanity.io`],
  },
};

const withNextIntl = nextIntl('./src/app/lib/i18n.ts');

export default withNextIntl(nextConfig);
