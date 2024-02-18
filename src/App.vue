<template>
  <div>
    <Navbar />
    <!-- <RouterLink class="button" to="/status">status</RouterLink>

    <RouterLink class="button" to="/notes">notes</RouterLink> -->
  </div>
  <div class="container"><RouterView></RouterView></div>
</template>
<script setup>
import Navbar from './components/Navbar.vue'
import 'bulma/css/bulma.min.css'
</script>
