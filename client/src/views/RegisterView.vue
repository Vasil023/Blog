<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore";

// Оголошення змінних
const email = ref("");
const password = ref("");
const role = ref("user");
const error = ref("");
const login = ref(true);
const userStore = useUserStore();

const route = useRouter();

// Функція реєстрації
const registerUser = async () => {
  await userStore.register(email.value, password.value, role.value);

  if (userStore.error) {
    error.value = userStore.error;
  } else {
    console.log("userStore.error", userStore.error);
    await loginUser(email.value, password.value);
    route.push("/");
  }
};

// Функція логіну
const loginUser = async () => {
  await userStore.login(email.value, password.value);

  if (userStore.error) {
    error.value = userStore.error;
  } else {
    route.push("/");
  }
};
</script>

<template>
  <div class="min-h-screen text-gray-900 flex justify-center">
    <div
      class="m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1"
    >
      <div>
        <div class="mt-12 flex flex-col items-center">
          <h1 class="text-2xl xl:text-3xl font-extrabold">
            {{ login ? "Увійти" : "Реєстрація" }}
          </h1>

          <div class="w-full flex-1 mt-8">
            <div class="mx-auto px-4">
              <input
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white"
                :class="{ 'border-red-500': error.type === 'email' }"
                type="email"
                placeholder="Email"
                v-model="email"
              />

              <span
                v-if="error.type === 'email'"
                class="text-red-500 text-xs mt-1"
              >
                {{ error.message }}
              </span>

              <input
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                :class="{ 'border-red-500': error.type === 'password' }"
                type="password"
                placeholder="Password"
                v-model="password"
              />

              <span
                v-if="error.type === 'password'"
                class="text-red-500 text-xs mt-1"
              >
                {{ error.message }}
              </span>

              <button
                @click.prevent="login ? loginUser() : registerUser()"
                :class="{ disabled: userStore.isLoading }"
                class="mt-5"
              >
                <svg
                  v-if="!userStore.isLoading"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>

                <i
                  v-else
                  class="pi pi-spin pi-spinner"
                  style="font-size: 1.3rem"
                ></i>

                <span class="ml-3">
                  {{ login ? "Увійти" : "Регістрація" }}
                </span>
              </button>
            </div>

            <div class="my-12 border-b text-center">
              <div
                class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
              >
                {{ login ? "Не маєте аккаунту?" : "Вже маєте аккаунт?" }}
              </div>
            </div>

            <div class="flex flex-col items-center px-3">
              <button>
                <span class="ml-4" @click="login = !login">
                  {{ login ? "Регістрація" : "Увійти" }}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
