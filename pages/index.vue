<template>
  <v-row justify="center" align="center">
    <v-col>
      <movie-slide-group :movies="popularMovies" />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'IndexPage',

  data() {
    return {
      //
    }
  },

  async fetch() {
    await this.fetchPopularMovies()
  },

  computed: {
    ...mapGetters({
      popularMovies: 'popularMovies',
    }),
  },

  created() {},

  methods: {
    ...mapActions({
      fetchPopularMovies: 'fetchPopularMovies',
    }),
  },
}
</script>
