<template>
  <v-app id="inspire">
    <v-navigation-drawer fixed v-model="drawer" app>
      <v-list dense>
        <v-list-tile
          @click="
            (e) => {
              onNavig(e, '/');
            }
          "
        >
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Accueil</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile
          @click="
            (e) => {
              onNavig(e, '/about');
            }
          "
        >
          <v-list-tile-action>
            <v-icon>account_box</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>A propos</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile
          @click="
            (e) => {
              onNavig(e, '/contact');
            }
          "
        >
          <v-list-tile-action>
            <v-icon>email</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>PROJ9CT</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <nuxt />
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">Gauthier Amano &copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
  }),
  methods: {
    onNavig(e, arg) {
      this.$router.push(arg);
    },
  },
};
</script>
