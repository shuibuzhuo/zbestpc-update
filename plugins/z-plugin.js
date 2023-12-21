const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function (api, params) {
  const dir = process.cwd();
  const config = api.getWebpackConfig();

  config.entry('login').add(path.resolve(dir, './src/login.js'));

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

  const defaultHtmlWebpackPlugin = config.plugin('HtmlWebpackPlugin');
  defaultHtmlWebpackPlugin.use(HtmlWebpackPlugin, [
    {
      filename: 'index.html',
      template: path.resolve(dir, './src/index.html'),
      chunks: ['index'],
    },
  ]);

  config.plugin('HtmlWebpackPlugin2').use(HtmlWebpackPlugin, [
    {
      filename: 'login.html',
      template: path.resolve(dir, './src/login.html'),
      chunks: ['login'],
    },
  ]);

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
