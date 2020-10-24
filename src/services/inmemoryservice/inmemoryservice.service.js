// Initializes the `inmemoryservice` service on path `/inmemoryservice`
const { Inmemoryservice } = require("./inmemoryservice.class");
const hooks = require("./inmemoryservice.hooks");

module.exports = function (app) {
  const paginate = app.get("paginate");

  const options = {
    paginate,
  };

  // Initialize our service with any options it requires
  app.use("/inmemoryservice", new Inmemoryservice(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("inmemoryservice");

  service.hooks(hooks);
};
