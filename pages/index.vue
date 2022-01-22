<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col md="10">
        <h1>Popular Movies</h1>
        <movie-slide-group :movies="popularMovies" :type="'movie'" />
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-col md="10">
        <h1>Popular TV Shows</h1>
        <movie-slide-group :movies="popularTv" :type="'tv'"/>
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
      movieGenres: 'movieGenres',
      tvGenres: 'tvGenres',
    }),
  },

  methods: {
    ...mapActions({
      fetchPopularMovies: 'fetchPopularMovies',
      fetchPopularTv: 'fetchPopularTv',
    }),
  },
}
</script>
