<template>
  <v-app>
    <app-header />

    <v-content>
      <router-view />
    </v-content>
    
    <feedback />
  </v-app>
</template>

<script>
  import feedback from './components/feedback/Feedback'
  import appHeader from './components/header/AppHeader'
  
  export default {
    components: {
      feedback,
      appHeader
    },
    name: 'App',
  };
</script>
