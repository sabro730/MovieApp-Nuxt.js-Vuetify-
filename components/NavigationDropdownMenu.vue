<template>
  <v-menu offset-y>
    <template #activator="{ on: menu }">
      <v-btn large text v-on="{ ...menu }">
          Menu
      </v-btn>
    </template>

    <v-list dense>
      <v-list-item  v-for="item in items" :key="item" :to="item.to">
        <v-list-item-title >{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: 'mdi-apps',
        title: 'Welcome',
        to: '/',
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'Inspire',
        to: '/inspire',
      },
    ],
  }),
}
</script>