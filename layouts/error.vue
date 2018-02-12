<template>
  <div class="container">
  	<template v-if="error.statusCode === 404">
      <h1>Oops!</h1>
      <p>On a fait ce qu'on a pu, mais impossible de trouver cette page.</p>
    </template>
  	<template v-else>
      <h1>Une erreur s'est produite.</h1>
      <p>Il s'agit de l'erreur {{ error.statusCode }}</p>
    </template>
    <nuxt-link to="/">Retour à la page d'accueil</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
//  layout: 'blog' // you can set a custom layout for the error page
}
</script>