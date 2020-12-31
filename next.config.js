const withImages = require('next-images');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withImages({
  //  Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/antoniaat/antoniaat.github.io/gh-pages' : '',
});
