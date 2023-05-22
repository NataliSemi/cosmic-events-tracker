const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  plugins: [
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      cacheFolder: './.cache',
      pngquant: {
        quality: '65-80',
      },
      jpegtran: {
        progressive: true,
      },
    }),
  ],
};
