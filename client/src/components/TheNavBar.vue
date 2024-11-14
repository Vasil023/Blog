<template>
  <nav
    class="backdrop-blur-md bg-black/55 fixed z-50 w-full bottom-0 py-3 px-4"
  >
    <div class="flex justify-between items-center max-w-screen-sm m-auto">
      <router-link to="/">
        <span class="pi pi-home" style="font-size: 1.4rem; color: #fff"></span
      ></router-link>
      <router-link to="/checked">
        <span
          class="pi pi-shopping-cart"
          style="font-size: 1.4rem; color: #fff"
        ></span>
      </router-link>
      <router-link to="/create">
        <span class="pi pi-plus" style="font-size: 1.4rem; color: #fff"></span>
      </router-link>

      <span class="pi pi-list" style="font-size: 1.4rem; color: #fff"></span>
      <span class="pi pi-user" style="font-size: 1.4rem; color: #fff"></span>
    </div>
  </nav>
</template>
