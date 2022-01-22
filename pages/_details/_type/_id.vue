<template>
  <div>
    {{ movie }}
    <NuxtLink to="/">Back to Mountains</NuxtLink>
  </div>
</template>
<script>
export default {
  // Get show details from API
  async asyncData({ params, redirect, $axios }) {
    const queryString = params.type + '/' + params.id + process.env.API_KEY
    const response = await $axios.$get(queryString)

    if (response) {
      return {
        movie: response,
      }
    } else {
      redirect('/')
    }
  },

  data() {
    return {}
  },
}
</script>
