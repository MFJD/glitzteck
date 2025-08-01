// module.exports = {
//     i18n: {
//       defaultLocale: 'en',
//       locales: ['en', 'de'],
//     },
//   }


module.exports = {
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};