<template>
  <v-menu offset-y :rounded="'b-xl'">
    <template #activator="{ on: menu }">
      <v-btn large text v-on="{ ...menu }"> Menu </v-btn>
    </template>

    <v-list dense color="indigo">
      <v-list-item v-for="item in items" :key="item.title" :to="item.to" >
        <v-list-item-action>
          <v-icon color="teal lighten-2">{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: 'mdi-home',
        title: 'HOME',
        to: '/',
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'ABOUT',
        to: '/inspire',
      },
    ],
  }),
}
</script>