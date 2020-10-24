<template>
  <v-toolbar dark color="blue">
    <v-toolbar-side-icon @click.stop="navigationSwitch"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">PROJ9CT</v-toolbar-title>
    <!--v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn-->
  </v-toolbar>
</template>

<script>
//import { mapState } from 'vuex'

export default {
  // fetch(context) is called by the server-side
  // and nuxt before instantiating the component
  //  fetch({ store }) {
  //    store.commit('navigationSwitch')
  //  },
  //  computed: mapState([
  //    'navigation'
  //  ]),
  methods: {
    navigationSwitch() {
      //      this.$store.commit('navigationSwitch')
    },
  },
};
</script>
