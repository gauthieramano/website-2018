//GA NUXT MODIFICATION
/* eslint-disable no-console */
const logger = require('winston');
const app = require('./app');
const port = app.get('port');

process.on('unhandledRejection', (reason, p) => {
  logger.error('Unhandled Rejection at: Promise ', p, reason);
});

process.on('nuxt:build:done', (err) => {
  if (err) {
    logger.error(err);
  }
  const server = app.listen(port);

  server.on('listening', () => {
////GA NUXT//    logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
    logger.info(`Feathers application started on ${app.get('host')}:${port}`);
  });
});