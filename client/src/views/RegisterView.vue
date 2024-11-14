<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore";

// Оголошення змінних
const email = ref("");
const password = ref("");
const role = ref("user");
const error = ref("");
const login = ref(false);
const userStore = useUserStore();

const route = useRouter();

// Функція реєстрації
const registerUser = async () => {
  await userStore.register(email.value, password.value, role.value);

  if (userStore.error) {
    error.value = userStore.error;
  } else {
    // Можна перенаправити користувача на іншу сторінку після успішної реєстрації
    console.log("User registered successfully!");
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
      <div class="lg:w-1/2 xl:w-5/12">
        <div class="mt-12 flex flex-col items-center">
          <h1 class="text-2xl xl:text-3xl font-extrabold">
            {{ login ? "Login" : "Register" }}
          </h1>

          <div class="w-full flex-1 mt-8">
            <div class="mx-auto px-4">
              <input
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email"
                placeholder="Email"
                v-model="email"
              />
              <input
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type="password"
                placeholder="Password"
                v-model="password"
              />

              <button
                @click.prevent="login ? loginUser() : registerUser()"
                class="mt-5"
              >
                <svg
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

                <span class="ml-3"> {{ login ? "Login" : "Register" }} </span>
              </button>
            </div>

            <div class="my-12 border-b text-center">
              <div
                class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
              >
                {{
                  login ? "Dont have an account?" : "Already have an account?"
                }}
              </div>
            </div>

            <div class="flex flex-col items-center px-3">
              <button>
                <span class="ml-4" @click="login = !login">
                  {{ login ? "Register" : "Login" }}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
