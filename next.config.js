module.exports = {
  poweredByHeader: false,
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    API_PATH: process.env.API_PATH,
  },
  i18n: {
    locales: ['en', 'vi', 'zh-tw'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['localhost'],
  },
};
