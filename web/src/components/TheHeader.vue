<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <!-- <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="@/assets/logo_trans.png" />
      </v-list-item-avatar>-->

      <!-- <v-list-item-content>
            <v-list-item-title>{{ currentUser.username }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon>
              <v-icon color="tertiary">
                mdi-logout
              </v-icon>
            </v-btn>
      </v-list-item-action>-->
      <!-- </v-list-item>
      </v-list>-->

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item active-class="primary--text" :to="{ name: 'Projects' }">
          <v-list-item-action>
            <v-icon>mdi-apps</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item active-class="primary--text" :to="{ name: 'Dashboard' }">
          <v-list-item-action>
            <v-icon>mdi-chart-bar</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item active-class="primary--text" :to="{ name: 'Templates' }">
          <v-list-item-action>
            <v-icon>mdi-file</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Templates</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- <v-list-item
          active-class="primary--text"
          :to="{name: 'Settings'}"
        >
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>-->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      flat
      hide-on-scroll
      color="#1a73e8"
      dense
      dark
    >
      <!-- <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template>-->
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <b>Purify</b>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn icon>
        <v-badge
          color="primary"
          content="6"
          overlap
          bottom
          left
        >
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-avatar class="mx-2" size="36">
        <img :src="currentUser.image" alt="ava" />
      </v-avatar>-->
      <!-- <v-toolbar-title>
        <span id="active-page-name" class="ml-4 font-weight-bold">{{ activePage }}</span>
      </v-toolbar-title>-->
    </v-app-bar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TheHeader',
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    ...mapGetters(['activePage', 'currentUser']),
  },
};
</script>
