const { build, preview } = require('vite');

module.exports = async function () {
  try {
    await build({
      configFile: './vite.vue3.config.js',
    });

    const previewServer = await preview({
      configFile: './vite.vue3.config.js',
    });
    previewServer.printUrls();
  } catch (error) {
    console.error(error);
  }
};
