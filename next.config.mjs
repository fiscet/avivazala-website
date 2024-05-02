import nextIntl from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [`cdn.sanity.io`],
  },
};

const withNextIntl = nextIntl('./src/i18n.ts');

export default withNextIntl(nextConfig);
