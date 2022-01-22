<template>
  <v-sheet class="mx-auto" elevation="8">
    <v-slide-group v-model="model" class="pa-4" show-arrows>
      <v-slide-item v-for="movie in movies" :key="movie.id" v-slot="{ toggle }">
        <v-hover>
          <template #default="{ hover }">
            <v-card
              :color="hover ? 'green darken-2' : 'white'"
              class="ma-4"
              width="230px"
              @click="toggle"
            >
              <v-img
                height="330px"
                width="220px"
                :src="posterUrl + movie.poster_path"
              >
              </v-img>

              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-btn>See more info</v-btn>
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

  methods: {
    getTitle(item) {
      return item.title || item.name
    },
  },

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
  border: 6px solid !important;
}

</style>
