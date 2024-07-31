/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['en', 'pt', 'es'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    domains: ['storage.googleapis.com'],
  },
};
