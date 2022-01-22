<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col>
        <h1>Popular Movies</h1>
        <movie-slide-group :movies="popularMovies" />
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-col>
        <h1>Popular Shows</h1>
        <movie-slide-group :movies="popularTv" />
      </v-col>
    </v-row>
  </v-container>
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
    await this.fetchPopularTv()
  },

  computed: {
    ...mapGetters({
      popularMovies: 'popularMovies',
      popularTv: 'popularTv',
    }),
  },

  created() {},

  methods: {
    ...mapActions({
      fetchPopularMovies: 'fetchPopularMovies',
      fetchPopularTv: 'fetchPopularTv',
    }),
  },
}
</script>
