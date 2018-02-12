<template>
  <v-navigation-drawer
    fixed
    v-model="navig"
    app
  >
    <v-list dense>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>contact_mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Contact</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

//import { mapState } from 'vuex'

export default {
  computed: {
    navig() {
      return null//this.$store.state.navig
    }
  },
  // fetch(context) is called by the server-side
  // and nuxt before instantiating the component
//  fetch({ store }) {
//    store.commit('navigationSwitch')
//  },
//  computed: mapState([
//    'navigation'
//  ]),
//  methods: {
//    navigationSwitch() {
//      this.$store.commit('navigationSwitch')
//    }
//  }
}

</script>