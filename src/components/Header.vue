<!-- Header.vue -->
<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 sm:pt-6">
    <div class="flex items-center justify-between h-16 md:h-20">
      <nav class="flex grow">
        <!-- Links -->
        <ul class="flex grow justify-center flex-wrap items-center">
          <li class="ml-6">
            <router-link to="/" class="font-medium text-base text-slate-600 hover:text-slate-700 transition duration-150 ease-in-out">
              Home
            </router-link>
          </li>
          <li class="ml-6">
            <button @click="buscarArticuloClick" class="font-medium text-base text-slate-600 hover:text-slate-700 transition duration-150 ease-in-out">
              Buscar artículo
            </button>
          </li>
          <!-- Otros enlaces del menú -->
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    buscarArticuloClick() {
      this.$emit("toggle-form");
    },
  },
};
</script>
