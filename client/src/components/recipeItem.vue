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

  <!-- <div class="flex justify-center items-center break-inside-avoid">
    <div class="max-w-[720px] mx-auto">
      <div
        class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
      >
        <div
          class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg h-64 object-cover rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40"
        >
          <img
            :src="
              props.item.image ??
              'https://www.ukrslovo.net/wp-content/uploads/2021/11/14-322911_1100.jpg'
            "
            alt="ui/ux review check"
          />

          <div
            class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"
          ></div>
          <button
            class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span
              class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div class="p-6">
          <div class="flex items-center justify-between mb-3">
            <h5
              class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900"
            >
              {{ props.item.title }}
            </h5>
            <p
              class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="-mt-0.5 h-5 w-5 text-yellow-700"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {{ props.item.point }}
            </p>
          </div>
          <p
            class="block font-sans text-base antialiased font-light leading-relaxed text-gray-700"
          >
            {{ props.item.description }}
          </p>
        </div>
        <div class="p-6 pt-3">
          <button
            @click.prevent="
              checkRecipe(props.item._id, props.item.isChecked ? false : true)
            "
            type="button"
            :class="{
              'disabled:opacity-40': props.item.isChecked,
            }"
          >
            {{ props.item.isChecked ? "Вже вибрано" : "Вибрати" }}
          </button>
        </div>
      </div>
    </div>
  </div> -->
</template>
