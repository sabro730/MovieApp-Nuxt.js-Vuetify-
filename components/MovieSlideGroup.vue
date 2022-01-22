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
        <v-hover>
          <template #default="{ hover }">
            <v-card
              :color="active ? 'primary darken-3' : 'white'"
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
  background: #26db26 !important;
  border: 6px solid red !important;
}

h3 {
  text-shadow: 0 0 10px #000; /* horizontal-offset vertical-offset 'blur' colour */
  word-break: inherit;
}
</style>
