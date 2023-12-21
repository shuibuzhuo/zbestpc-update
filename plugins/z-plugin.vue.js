const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function (api, params) {
  const dir = process.cwd();
  const config = api.getWebpackConfig();

  config.module
    .rule('ejs')
    .test(/\.ejs$/)
    .exclude.add(/node_modules/)
    .end()
    .use('ejs-loader')
    .loader('ejs-loader')
    .options({
      esModule: false,
    });

  config.plugin('ProvidePlugin').use(webpack.ProvidePlugin, [
    {
      $: 'jquery',
      jQuery: 'jquery',
    },
  ]);

  config.plugin('CopyPlugin').use(CopyWebpackPlugin, [
    {
      patterns: [
        {
          from: path.resolve(dir, './src/img'),
          to: path.resolve(dir, './dist/img'),
        },
      ],
    },
  ]);
};
