<script setup>
import { RouterView } from "vue-router";
import TheNavBar from "./components/TheNavBar.vue";
</script>

<template>
  <div>
    <TheNavBar />
    <RouterView />
  </div>
</template>

<style scoped></style>
