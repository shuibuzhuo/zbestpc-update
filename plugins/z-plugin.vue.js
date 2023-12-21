const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = function (api, params) {
  console.log('vue plugin run...');
  const dir = process.cwd();
  const config = api.getWebpackConfig();

  config.entry('index').clear().add(path.resolve(dir, './src/main.js'));

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

  config.module
    .rule('vue')
    .test(/\.vue$/)
    .exclude.add(/node_modules/)
    .end()
    .use('vue-loader')
    .loader('vue-loader');

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

  config.plugin('VueLoaderPlugin').use(VueLoaderPlugin);
};
