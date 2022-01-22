<template>
  <v-sheet class="mx-auto" elevation="8">
    <v-slide-group v-model="model" class="pa-4" show-arrows>
      <v-slide-item v-for="movie in movies" :key="movie.id" v-slot="{ toggle }">
        <v-hover>
          <template #default="{ hover }">
            <v-card
              :color="hover ? 'green darken-2' : 'white'"
              class="ma-4"
              width="160px"
              @click="toggle"
            >
              <v-img width="150px" :src="posterUrl + movie.poster_path">
              </v-img>

              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <h3 class="centeredH3">{{ movie.vote_average }} / 10</h3>
                  <h3 class="centeredH3">{{ movie.genre_id_strings[0] }}</h3>
                  <h3 class="centeredH3">{{ getReleaseYear(movie) }}</h3>
                  <v-btn
                    small
                    class="ma-5"
                    :to="`details/${type}/${movie.id}`"
                    color="green darken-2"
                    >View Details</v-btn
                  >
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    movies: {
      type: Array,
      default: () => [],
    },

    type: {
      type: String,
      default: 'movie',
    },
  },

  data: () => ({
    model: null,
    posterUrl: 'https://image.tmdb.org/t/p/w220_and_h330_face',
  }),

  computed: {
    ...mapGetters({
      movieGenres: 'movieGenres',
      tvGenres: 'tvGenres',
    }),
  },

  methods: {
    getTitle(item) {
      return item.title || item.name
    },

    getReleaseYear(item) {
      const year = item.release_date || item.first_air_date
      return year.substring(0, 4)
    },
  },
}
</script>

<style>
.v-card {
  border: 6px solid !important;
}

.centeredH3 {
  text-align: center;
}
</style>
