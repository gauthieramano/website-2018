//GA NUXT CREATION
// your-app/src/middleware/index.js

////const handler = require('feathers-errors/handler');
////const notFound = require('feathers-errors/not-found');
//const express = require('@feathersjs/express');
const handler = require("@feathersjs/errors/handler");
const notFound = require("@feathersjs/errors/not-found");

// const fs = require("fs"); // GA text route

const { render } = require("./nuxt"); // <- Require the middleware

module.exports = function() {
  // Add your custom middleware here. Remember, that
  // in Express the order matters, `notFound` and
  // the error handler have to go last.
  const app = this;

  // Use Nuxt's render middleware
  app.use((req, res, next) => {
    switch (req.accepts("html", "json")) {
      case "json": {
        // myLog(req);
        if (req.url === "/canal") {
          res.locals.canal = true;
          res.locals.canalFichier = req.body.fichier;
          res.locals.canalContenu = req.body.contenu;
        }

        next();
        break;
      }
      default: {
        render(req, res, next);
      }
    }
  });

  // CANAL app.use(notFound());
  app.use(handler());
  // app.use(express.errorHandler());
};

// fs.readFile(
//   "/Users/gauthieramano/GA/NODE/test03feathers/doubleend/src/middleware/testcanal/bonjour.txt",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// var stream = fs.createWriteStream(
//   `${__dirname}/testcanal/${req.body.fichier}.txt`,
//   { mode: 0o777 }
// );
// stream.write(req.body.contenu);
// stream.end();

// fs.writeFile(
//   `${__dirname}/testcanal/${req.body.fichier}.txt`,
//   req.body.contenu,
//   err => {
//     if (err) {
//       return console.log(err);
//     }
//     console.log(`***** ${req.body.fichier}`);
//   }
// );

const mList = (keys, key, type, show) => {
  const val = typeof keys[key] === "string" ? keys[key] : typeof keys[key];
  (show || keys[key]) &&
    console.log(`     ${type}   *   ${key}   ..........   ${val}`);
};

const myLog = req => {
  Object.keys(req).forEach(key => {
    if (typeof req[key] === "string") {
      console.log(`- ${key} : ${req[key]}`);
    } else {
      if (key === "headers") {
        Object.keys(req[key]).forEach(k => mList(req[key], k, "head "));
        // } else if (key === "rawHeaders") {
        //   Object.keys(req[key]).forEach(k => mList(req[key], k, "Raw H"));
        // } else if (key === "req") {
        //   Object.keys(req[key].body).forEach(k =>
        //     mList(req[key].body, k, "OUT  ")
        //   );
        // } else if (key === "statusMessage") {
        //   console.log(`      *** ${key} --- ${typeof req[key]}`);
        //   req[key] &&
        //     Object.keys(req[key]).forEach(k => mList(req[key], k, "S Msg"));
      } else if (key === "body") {
        console.log("::::: BODY :::::");
        // console.log(`      *** ${key} --- ${typeof req[key]}`);
        Object.keys(req[key]).forEach(k => mList(req[key], k, "body ", true));
        // } else if (key === "params") {
        //   Object.keys(req[key]).forEach(k => mList(req[key], k, "param"));
        // } else if (key === "query") {
        //   Object.keys(req[key]).forEach(k => mList(req[key], k, "query"));
      } else {
        console.log(`                     ${key} --- ${typeof req[key]}`);
      }
    }
  });
};
