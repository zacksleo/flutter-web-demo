const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function override(config, env) {
  // Remove the default HtmlWebpackPlugin
  config.plugins = config.plugins.filter(
    (plugin) => !(plugin instanceof HtmlWebpackPlugin)
  );

  // Add your own HtmlWebpackPlugin instance with your own options
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      minify: {
        removeComments: false,
        collapseWhitespace: false,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: false,
        minifyCSS: true,
        minifyURLs: true,
      },
    })
  );

  return config;
};