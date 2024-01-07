<!-- BuscarArticulo.vue -->
<template>
  <div>
    <!-- Formulario (visible solo cuando el formulario está abierto) -->
    <ArticuloForm v-if="mostrarFormulario" @cerrarFormulario="ocultarFormulario" />
  </div>
</template>

<script>
import ArticuloForm from "../components/ArticuloForm.vue";
export default {
  components: {
    ArticuloForm,
  },
  props: {
    mostrarFormulario: Boolean,
  },
  methods: {
    ocultarFormulario() {
      this.$emit("cerrarFormulario");
    },
  },
};
</script>
