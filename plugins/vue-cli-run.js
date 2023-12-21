const Service = require('@vue/cli-service/lib/Service');

module.exports = function () {
  const service = new Service(process.cwd());
  service.run('serve');
};
