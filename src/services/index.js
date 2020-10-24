const inmemoryservice = require("./inmemoryservice/inmemoryservice.service.js");

module.exports = function (app) {
  app.configure(inmemoryservice);
};
