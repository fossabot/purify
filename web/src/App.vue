<template>
  <v-app id="app">
    <router-view name="header" />
    <v-content>
      <vue-page-transition name="fade">
        <router-view />
      </vue-page-transition>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    drawer: null,
  }),
  computed: {
    ...mapGetters(['activePage']),
  },
};
</script>

<style>
#app {
  background-color: #fafafa;
}
.router-link-active {
  color: #2c3e50;
}

</style>
