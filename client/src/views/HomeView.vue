<script setup>
import { onMounted } from "vue";
import { useRecipeStore } from "@/stores/recipeStore";

import recipeItem from "@/components/recipeItem.vue";

const recipeStore = useRecipeStore();

onMounted(() => {
  recipeStore.getAllRecipe();
});
</script>

<template>
  <div>
    <div class="container">
      <div
        class="columns-2 lg:columns-4 lg:gap-3 gap-2 pt-1 pb-20"
        v-if="recipeStore.allRecipe.length && !recipeStore.isLoading"
      >
        <recipeItem
          v-for="item in recipeStore.allRecipe"
          :item="item"
          :key="item._id"
        />
      </div>

      <div
        class="grid place-items-center h-screen"
        v-if="!recipeStore.allRecipe.length && !recipeStore.isLoading"
      >
        <div class="grid place-items-center gap-4">
          <span
            class="pi pi-cart-minus"
            style="font-size: 4rem; color: #5a382d"
          ></span>
          <p>No recipe found</p>
        </div>
      </div>
    </div>

    <div class="grid place-items-center" v-if="recipeStore.isLoading">
      <div class="grid place-items-center gap-4">Loading...</div>
    </div>
  </div>
</template>
