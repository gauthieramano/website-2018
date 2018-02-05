//GA NUXT CREATION
// your-app/src/middleware/index.js

////const handler = require('feathers-errors/handler');
////const notFound = require('feathers-errors/not-found');
//const express = require('@feathersjs/express');
const handler = require('@feathersjs/errors/handler');
const notFound = require('@feathersjs/errors/not-found');

const { render } = require('./nuxt'); // <- Require the middleware

module.exports = function () {
    // Add your custom middleware here. Remember, that
    // in Express the order matters, `notFound` and
    // the error handler have to go last.
    const app = this;

    // Use Nuxt's render middleware
    app.use((req, res, next) => {
      switch (req.accepts('html', 'json')) {
        case 'json': {
          next();
          break;
        }
        default: {
          render(req, res, next);
        }
      }
    });

    app.use(notFound());
    app.use(handler());
//    app.use(express.errorHandler());
};