//GA NUXT CREATION
// your-app/nuxt.config.js

const path = require("path");

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "PROJ9CT Application",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",
      },
    ],
  },

  plugins: ["~plugins/vuetify.js"],

  css: ["~assets/app.styl"],

  build: {
    vendor: ["vuetify"],
  },

  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },

  rootDir: path.resolve(__dirname),

  dev: process.env.NODE_ENV !== "production",
};
