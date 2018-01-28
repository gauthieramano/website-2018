// Initializes the `doubleendservicea` service on path `/doubleendservicea`
const createService = require('feathers-mongodb');
const hooks = require('./doubleendservicea.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/doubleendservicea', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('doubleendservicea');

  mongoClient.then(db => {
    service.Model = db.collection('doubleendservicea');
  });

  service.hooks(hooks);
};
