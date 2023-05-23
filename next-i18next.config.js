const path = require('path');
module.exports = {
  i18n: {
    locales: ['en', 'tm'],
    defaultLocale: 'tm',
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'),
};
