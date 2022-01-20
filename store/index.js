export const state = () => ({
  popularMovies: [],
})

export const mutations = {
  SET_POPULAR_MOVIES(state, payload) {
    console.log('SET_POPULAR_MOVIES', payload)
    state.popularMovies = payload
  },
}

export const actions = {
  async fetchPopularMovies({ commit }) {
    await this.$axios
      .get('movie/popular' + process.env.API_KEY)
      .then((response) => {
        commit('SET_POPULAR_MOVIES', response.data.results)
      })
  },
}

export const getters = {
  popularMovies: (state) => state.popularMovies,
}
