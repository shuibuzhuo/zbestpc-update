const path = require('path');

module.exports = function (api) {
  const dir = process.cwd();
  const config = api.getWebpackConfig();

  config.entry('index').clear().add(path.resolve(dir, './src/react/index.js'));

  config.module
    .rule('react')
    .test(/\.(js|jsx)$/)
    .exclude.add(/node_modules/)
    .end()
    .use('babel-loader')
    .loader('babel-loader')
    .options({
      presets: ['@babel/preset-env', '@babel/preset-react'],
    });
};
