<script setup>

</script>

<template>
  <v-app>
    <nav>
      <router-link to="/">Top</router-link>  | <router-link to="/chat">Chat</router-link>  | <router-link to="/schedule">Schedule</router-link>
    </nav>
    <router-view />
  </v-app>
</template>

<style>

</style>