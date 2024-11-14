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
  <div class="container">
    <div class="grid grid-cols-1 gap-6 pb-10 px-2" v-if="recipeStore.allRecipe">
      <recipeItem
        v-for="item in recipeStore.allRecipe"
        :item="item"
        :key="item._id"
      />
    </div>
    <div class="grid place-items-center h-screen" v-else>
      <div class="grid place-items-center gap-4">
        <span class="pi pi-cart-minus" style="font-size: 4rem"></span>
        <p>No recipe found</p>
      </div>
    </div>
  </div>
</template>
