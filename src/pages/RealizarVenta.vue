<template>
    <div class="flex flex-col min-h-screen overflow-hidden">
  
      <Header />
  
      <div class="flex flex-col lg:flex-row"> <!-- Cambio a flex-col en pantallas pequeñas y a flex-row en pantallas grandes -->
        
        <!-- Aquí está el buscador -->
        <BuscardorVenta class="order-2 lg:order-1 lg:w-2/5" />
  
        <main class="w-full lg:w-3/5 lg:ml-auto">
  
          <!-- Page content -->
          <div class="max-lg:grow flex flex-col w-full mx-auto px-4 sm:px-6 py-12 lg:pb-20">
            <article class="divide-y divide-slate-100 dark:divide-slate-800 -mt-8 mb-4">
              <TableVenta />
            </article>
          </div>
        </main>
  
      </div>
  
    </div>
  </template>
  
  <script setup>
  import Header from '../components/Header.vue'
  import BuscardorVenta from '../components/BuscardorVenta.vue';
  import TableVenta from '../components/TableVenta.vue';
  import { ref } from 'vue'
  </script>
  