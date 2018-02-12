<template>
  <div>
    <Navigation/>
    <Toolbar/>
    <nuxt/>
  </div>
</template>

<script>

import Navigation from '~/components/Navigation.vue'
import Toolbar from '~/components/Toolbar.vue'

export default {
  components: {
    Navigation,
    Toolbar
  }
}

</script>