<template>
  <v-carousel
    hide-delimiters
    cycle
    height="600px"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(movie, i) in movies"
      :key="i"
      
      
    >
    
      <v-sheet
        
        height="100%"
      >
      <v-img height="600px" :src="posterUrl + movie.backdrop_path" >
      
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
        
        <div class="leftInfo">
            
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
          model: null,
          posterUrl: 'https://image.tmdb.org/t/p/original',
      }),
  }
</script>

<style scoped>
.leftInfo{
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
    background-image: linear-gradient(90deg, rgb(0, 0, 0), rgba(14, 13, 13, 0.979), rgba(35, 35, 35, 0.815), rgba(35, 35, 35, 0.7), rgba(35, 35, 35, 0.0));
}

</style>