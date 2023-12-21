const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const dir = process.cwd();

module.exports = {
  chainWebpack: (config) => {
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
  },
};
