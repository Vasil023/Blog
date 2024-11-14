<script setup>
import { computed } from "vue";
import recipeItem from "@/components/recipeItem.vue";
import { useRecipeStore } from "@/stores/recipeStore";

const recipeStore = useRecipeStore();

const isCheckedItem = computed(() => {
  return recipeStore.allRecipe.filter((item) => item.isChecked);
});
</script>

<template>
  <div>
    <div class="container">
      <div
        class="grid grid-cols-1 gap-6 pb-10 px-2"
        v-if="isCheckedItem.length"
      >
        <recipeItem
          v-for="item in isCheckedItem"
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
  </div>
</template>
