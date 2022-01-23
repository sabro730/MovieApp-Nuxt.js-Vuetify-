<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app dense color="purple darken-4">
      <v-btn class="unfocusableButton" text to="/">
        <nuxt-logo></nuxt-logo>
        <h1 class="ml-4">Kinomax</h1>
        <h6 class="mt-6 ml-2">by mokumus &copy;</h6>
      </v-btn>
      <v-spacer></v-spacer>
      <navigation-dropdown-menu/> 
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app color="purple darken-4" max-height="27px">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Movie App',
    }
  },
}
</script>

<style scoped>
.unfocusableButton.v-btn--active::before {
  opacity: 0 !important;
}

.v-application {
  background: url("./static/bg.png") no-repeat center center fixed !important;
  background-size: cover;
}

.v-application .purple.darken-4 {
    background-color: #4a148c6e !important;
    border-color: #4a148c !important;
}
</style>
