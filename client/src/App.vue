<script setup>
import { RouterView } from "vue-router";
import TheNavBar from "./components/TheNavBar.vue";
import { useUserStore } from "./stores/userStore";

const userStore = useUserStore();
</script>

<template>
  <div>
    <TheNavBar v-if="userStore.isLoggedIn()" />
    <RouterView />
  </div>
</template>

<style scoped></style>
