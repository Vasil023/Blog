<script setup>
import { RouterView } from "vue-router";
import TheNavBar from "./components/TheNavBar.vue";
import { useUserStore } from "./stores/userStore";

const userStore = useUserStore();
</script>

<template>
  <div>
    <div class="flex items-center justify-around px-3 relative">
      <div class="flex-1 text-center">
        <p class="logo text-[#5a382d]">Nyama Dev</p>
      </div>

      <div
        class="flex items-center gap-1.5 absolute right-4"
        v-if="userStore.isLoggedIn()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="-mt-0.5 h-5 w-5 text-[#5a382d]"
        >
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd"
          ></path>
        </svg>
        0
      </div>
    </div>
    <TheNavBar v-if="userStore.isLoggedIn()" />
    <RouterView />
  </div>
</template>

<style scoped></style>
