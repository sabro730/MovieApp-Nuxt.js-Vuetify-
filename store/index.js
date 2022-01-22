export const state = () => ({
  popularMovies: [],
  popularTv: [],
})

export const mutations = {
  SET_POPULAR_MOVIES(state, payload) {
    console.log('SET_POPULAR_MOVIES', payload)
    state.popularMovies = payload
  },
  SET_POPULAR_TV(state, payload) {
    console.log('SET_POPULAR_TV', payload)
    state.popularTv = payload
  }
}

export const actions = {
  async fetchPopularMovies({ commit }) {
    await this.$axios
      .get('movie/popular' + process.env.API_KEY)
      .then((response) => {
        commit('SET_POPULAR_MOVIES', response.data.results)
      })
  },

  async fetchPopularTv({ commit }) {
    await this.$axios
      .get('tv/popular' + process.env.API_KEY)
      .then((response) => {
        commit('SET_POPULAR_TV', response.data.results)
      })
  }
}

export const getters = {
  popularMovies: (state) => state.popularMovies,
  popularTv: (state) => state.popularTv,
}
