<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="3">
        <v-sheet height="60vh" rounded="lg">
          <v-img height="60vh" :src="getPoster(movie)"> </v-img>
        </v-sheet>
      </v-col>

      <v-col cols="12" md="9">
        <v-sheet height="60vh" rounded="lg">
          <v-card flat color="transparant">
            <h1 class="bigTitle ml-4">{{ getTitle(movie) }}</h1>
            <h3 class="italicTagline ml-4">{{ movie.tagline }}</h3>
            <v-row class="ml-2 mt-1">
              <v-rating
                :value="movie.vote_average / 2"
                half-increments
                background-color="orange lighten-3"
                color="orange"
                small
                readonly
              ></v-rating>
              <h3 class="italicTagline ml-4">{{ movie.vote_average }} / 10</h3>
            </v-row>

            <v-card-text> {{ movie.overview }} </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              Genres: {{ movie.genres.map((genre) => genre.name).join(', ') }}
            </v-card-text>
            <v-card-text class="mt-n4">
              Release Date: {{ getReleaseYear(movie) }}
            </v-card-text>
            <v-card-text class="mt-n4">
              Production:
              {{
                movie.production_companies.map((comp) => comp.name).join(', ')
              }}
            </v-card-text>
            <v-card-text class="mt-n4">
              Language(s):
              {{
                movie.spoken_languages
                  .map((name) => name.english_name)
                  .join(', ')
              }}
            </v-card-text>

            <a
              :href="`https://www.imdb.com/title/${movie.imdb_id}`"
              target="_blank"
            >
              <img class="ml-4" src="~/static/logo-imdb.svg" />
            </a>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <!-- Only showing first 10 cast members -->
      <template v-for="(actor, j) in cast">
        <v-col :key="`${j}`">
          <v-sheet width="154px">
            <v-img width="154px" :src="getCastPicture(actor)"> </v-img>
            <p class="actorName">{{ actor.name }}</p>
          </v-sheet>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>
<script>
export default {
  // Get show details from API
  async asyncData({ params, redirect, $axios }) {
    const queryString1 = params.type + '/' + params.id + process.env.API_KEY
    const queryString2 =
      params.type + '/' + params.id + '/credits' + process.env.API_KEY
    // const response = await $axios.$get(queryString)

    const [movie, credits] = await Promise.all([
      $axios.get(queryString1),
      $axios.get(queryString2),
    ])
    console.log(movie, credits)
    if (!movie || !credits) {
      redirect('/')
    }
    return {
      movie: movie.data,
      cast: credits.data.cast,
      crew: credits.data.crew,
    }
  },

  data() {
    return {}
  },

  methods: {
    getCastPicture(item) {
      return item.profile_path
        ? `https://image.tmdb.org/t/p/w154${item.profile_path}`
        : 'https://via.placeholder.com/500x750'
    },
    getPoster(item) {
      return item.poster_path
        ? `https://image.tmdb.org/t/p/original${item.poster_path}`
        : 'https://via.placeholder.com/500x750'
    },
    getTitle(item) {
      return item.title || item.name
    },
    getReleaseYear(item) {
      const date = item.release_date || item.first_air_date
      return date
    },
  },
}
</script>

<style>
.bigTitle {
  font-size: 3rem;
  font-weight: 400;
  color: #fff;
}

.italicTagline {
  font-style: italic;
  color: rgb(197, 197, 197);
  font-weight: 300;
}

.actorName {
  text-align: center;
}
</style>
