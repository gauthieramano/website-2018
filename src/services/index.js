const doubleendservicea = require('./doubleendservicea/doubleendservicea.service.js');
module.exports = function (app) {
  app.configure(doubleendservicea);
};
