<!-- Home.vue -->
<template>
    <div class="flex flex-col min-h-screen overflow-hidden">
      <!-- Header -->
      <Header @toggle-form="toggleFormulario" />
  
      <!-- Content -->
      <main class="grow">
        <Logos />
        <!-- Componente BuscarArticulo -->
        <BuscarArticulo :mostrarFormulario="mostrarFormulario" @cerrarFormulario="ocultarFormulario" />
        <Table />
  
        
      </main>
    </div>
  </template>
  
  <script setup>
  import Header from '../components/Header.vue'
  import Logos from '../components/Logos.vue'
  import BuscarArticulo from '../pages/BuscarArticulo.vue';
  import Table from '../components/Table.vue'
  
  import { ref } from 'vue'; // Importa ref desde vue
  
  const mostrarFormulario = ref(false);
  
  const ocultarFormulario = () => {
    mostrarFormulario.value = false;
  };
  
  const toggleFormulario = () => {
    mostrarFormulario.value = !mostrarFormulario.value;
  };
  </script>
  