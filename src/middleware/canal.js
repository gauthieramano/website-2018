module.exports = function() {
  // Add your custom middleware here. Remember, that
  // in Express the order matters, `notFound` and
  // the error handler have to go last.
  const app = this;

  app.use((req, res, next) => {
    console.log(".. MIDDLEWARE CANAL ..");

    if (res.locals.canal) {
      app.service("inmemoryservice").create({
        name: res.locals.canalFichier,
        body: res.locals.canalContenu
      });

      res.status(201).send({ canal: res.locals.canalFichier });
    } else {
      next();
    }
  });
};
