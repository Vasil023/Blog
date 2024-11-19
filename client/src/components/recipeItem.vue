<script setup>
import { useRecipeStore } from "@/stores/recipeStore";

const props = defineProps(["item"]);

const recipeStore = useRecipeStore();

const checkRecipe = async (id, isChecked) => {
  await recipeStore.checkItem(id, isChecked);
};
</script>

<template>
  <div class="break-inside-avoid mb-4 rounded-xl">
    <div class="w-full relative">
      <img
        class="w-full rounded-xl object-fill"
        :src="
          props.item.image ??
          'https://www.ukrslovo.net/wp-content/uploads/2021/11/14-322911_1100.jpg'
        "
        alt="ui/ux review check"
      />
    </div>

    <div class="mt-1 pb-3 px-2">
      <p class="text-[13px] font-semibold">{{ props.item.title }}</p>
      <p class="text-xs text-gray-500">{{ props.item.description }}</p>
    </div>

    <div
      class="text-blue-gray-900 antialiased text-[13px] flex justify-between px-2"
    >
      <div class="flex items-center gap-1.5">
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
        {{ props.item.point }}
      </div>
      <span
        :class="
          props.item.isChecked ? 'pi pi-bookmark-fill' : 'pi pi pi-bookmark'
        "
        @click="
          checkRecipe(props.item._id, props.item.isChecked ? false : true)
        "
        style="font-size: 1rem"
      ></span>
    </div>
  </div>
</template>
