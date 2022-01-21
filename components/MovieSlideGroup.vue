<template>
  <v-sheet class="mx-auto" elevation="8">
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="indigo darken-3"
      show-arrows
    >
      <v-slide-item
        v-for="movie in movies"
        :key="movie.id"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? undefined : 'grey darken-3'"
          class="ma-4"
          height="400px"
          width="220px"
          @click="toggle"
        >
          <v-img
            class="white--text align-end"
            :src="posterUrl + movie.backdrop_path"
          >
          </v-img>
          <h3 class="ma-2">{{ movie.title }}</h3>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  props: {
    movies: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({
    model: null,
    posterUrl: 'https://image.tmdb.org/t/p/w220_and_h330_face',
  }),

  // async fetch() {
  //   await this.$axios.get("/configuration" + process.env.API_KEY)
  //     .then(response => {
  //       console.log(response)
  //     })
  // }
}
</script>

<style>
.v-card {
  overflow: hidden;
}

h3 {
  text-shadow: 0 0 10px #000; /* horizontal-offset vertical-offset 'blur' colour */
  word-break: inherit;
}
</style>
