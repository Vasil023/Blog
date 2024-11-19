<script setup>
import { computed } from "vue";
import { useRecipeStore } from "@/stores/recipeStore";

const recipeStore = useRecipeStore();

import recipeItem from "@/components/recipeItem.vue";

const isCheckedItem = computed(() => {
  return recipeStore.allRecipe.filter((item) => item.isChecked);
});
</script>

<template>
  <div>
    <div class="container">
      <div
        class="columns-2 lg:columns-4 lg:gap-3 gap-2 pt-1 pb-20"
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
          <span
            class="pi pi-cart-minus"
            style="font-size: 4rem; color: #5a382d"
          ></span>
          <p>Ви нічого не додали в обране</p>
        </div>
      </div>
    </div>
  </div>
</template>
