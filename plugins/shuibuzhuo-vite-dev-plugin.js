const { createServer } = require('vite');

module.exports = async function () {
  try {
    const server = await createServer({
      configFile: './vite.vue3.config.js',
    });
    await server.listen();

    server.printUrls();
  } catch (error) {
    console.error(error);
  }
};
