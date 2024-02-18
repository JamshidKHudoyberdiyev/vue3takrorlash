<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item is-size-4 $green"> NodeList </a>

        <a
          role="button"
          class="navbar-burger"
          @click="toggleButton"
          :class="{ 'is-active': active }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': active }">
        <div class="navbar-end">
          <RouterLink to="/notes" @click="close" active-class="is-active" class="navbar-item">
            Notes
          </RouterLink>

          <RouterLink to="/status" @click="close" active-class="is-active" class="navbar-item">
            Status
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(false)

const toggleButton = () => {
  active.value = !active.value
}

const close = () => {
  active.value = false
}
</script>

<style lang="scss" scoped></style>
