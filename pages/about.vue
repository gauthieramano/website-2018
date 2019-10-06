<template>
  <div>
    <h1>A propos</h1>
    <p>C'est une application réactive isomorphique (universelle) en temps réel avec rendus côté serveur (SSR), base de données NoSQL et design responsive.</p>
    <p>
      Cette application utilise les technologies suivantes :
      <b>Vue.js, Nuxt, Vuex, Vuetify, Stylus, Node.js, Feathers, Socket.io, MongoDB, AWS EC2, Ubuntu, Nginx, PM2, Certbot...</b>
    </p>
    <p>Cette application est une preview, en cours de développement.</p>
    <p>&nbsp;</p>
    <p>
      Site web officiel :
      <a href="https://proj9ct.com" target="_blank">proj9ct.com</a>
    </p>
    <p>
      Plus de photos que j'ai prises ici :
      <a href="https://gauthieramano.com" target="_blank">gauthieramano.com</a>
    </p>
    <p>&nbsp;</p>
    <v-carousel hide-delimiters>
      <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { src: "https://gauthieramano.com/AI/is0.jpg" },
        { src: "https://gauthieramano.com/AI/is2.jpg" },
        { src: "https://gauthieramano.com/AI/is9.jpg" },
        { src: "https://gauthieramano.com/AI/is6.jpg" }
      ]
    };
  }
};
</script>
