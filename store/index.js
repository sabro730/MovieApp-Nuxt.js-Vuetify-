export const state = () => ({
  popularMovies: [],
  popularTv: [],

  movieGenres: [],
  tvGenres: [],
})

export const mutations = {
  SET_POPULAR_MOVIES(state, payload) {
    state.popularMovies = payload[0].data.results
    state.movieGenres = payload[1].data.genres

    // Assign genre id to each movie
    state.popularMovies.forEach((movie) => {
      const genreIdStrings = []
      movie.genre_ids.forEach((genreId) => {
        genreIdStrings.push(
          state.movieGenres.find((genre) => genre.id === genreId).name
        )
      })
      movie.genre_id_strings = genreIdStrings
    })
  },
  SET_POPULAR_TV(state, payload) {
    state.popularTv = payload[0].data.results
    state.tvGenres = payload[1].data.genres

    // Assign genre id to each movie
    state.popularTv.forEach((movie) => {
      const genreIdStrings = []
      movie.genre_ids.forEach((genreId) => {
        genreIdStrings.push(
          state.tvGenres.find((genre) => genre.id === genreId).name
        )
      })
      movie.genre_id_strings = genreIdStrings
    })
  },
}

export const actions = {
  async fetchPopularMovies({ commit }) {
    await Promise.all([
      this.$axios.get('movie/popular' + process.env.API_KEY),
      this.$axios.get('genre/movie/list' + process.env.API_KEY),
    ]).then((responses) => {
      commit('SET_POPULAR_MOVIES', responses)
    })
  },

  async fetchPopularTv({ commit }) {
    await Promise.all([
      this.$axios.get('tv/popular' + process.env.API_KEY),
      this.$axios.get('genre/tv/list' + process.env.API_KEY),
    ]).then((responses) => {
      commit('SET_POPULAR_TV', responses)
    })
  },
}

export const getters = {
  popularMovies: (state) => state.popularMovies,
  popularTv: (state) => state.popularTv,
  movieGenres: (state) => state.movieGenres,
  tvGenres: (state) => state.tvGenres,
}
