<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app dense>
      <v-btn  class="unfocusableButton" text to="/">
      <nuxt-logo ></nuxt-logo>
      <h1  class="ml-4">Kinomax</h1>
      <h6 class="mt-6 ml-2">by mokumus &copy;</h6>
      </v-btn>
      <v-spacer />
      <v-btn> Home </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import NuxtLogo from '../components/NuxtLogo.vue'
export default {
  components: { NuxtLogo },
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Movie App',
    }
  },
}
</script>

<style scoped>
.unfocusableButton.v-btn--active::before{
  opacity: 0 !important;
}
</style>