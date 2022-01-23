<template>
  <v-carousel
    hide-delimiters
    height="600px"
    cycle
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(movie, i) in movies" :key="i">
      <v-sheet height="100%">
        <v-img height="600px" :src="posterUrl + movie.backdrop_path">
          <v-row class="fill-height" align="center" justify="center">
            <div class="leftInfo">
              <v-card flat color="transparent">
                <h1 class="bigTitle">{{getTitle(movie)}}</h1>
                <p class="shorten mr-15 pr-15">{{movie.overview}}</p>
                <v-rating
                  :value="movie.vote_average/2"
                  half-increments
                  background-color="orange lighten-3"
                  color="orange"
                  large
                  readonly
                  class="ml-n3"
                ></v-rating>
                <v-btn
                  small
                  tile
                  :to="`details/movie/${movie.id}`"
                  color="teal"
                  >View Details</v-btn
                >
                
              </v-card>
            </div>
          </v-row>
        </v-img>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
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
    posterUrl: 'https://image.tmdb.org/t/p/original',
  }),


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
.leftInfo {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 45%;
  height: 100%;
  padding: 5rem 4rem;
  background-image: linear-gradient(
    90deg,
    rgb(0, 0, 0),
    rgba(14, 13, 13, 0.979),
    rgba(35, 35, 35, 0.815),
    rgba(35, 35, 35, 0.7),
    rgba(35, 35, 35, 0)
  );
}

.bigTitle{
  font-size: 3rem;
  font-weight: 400;
  color: #fff;
}

p.shorten{
     display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden; 
}
</style>
