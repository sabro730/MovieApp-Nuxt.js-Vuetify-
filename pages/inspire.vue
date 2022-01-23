<template>
  <v-row>
    <v-col class="text-center">
      <img src="~/static/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>

        <a :href="`https://github.com/mokumus/MovieApp`" target="_blank">
          <h4>https://github.com/mokumus/MovieApp</h4>
        </a>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'InspirePage',
}
</script>

<style>
h4 {
  font-size: 1.5rem;
  font-weight: 500;
  color: #2f32dd;
}
</style>
