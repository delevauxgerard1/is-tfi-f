<template>
    <div class="max-lg:grow flex flex-col w-full lg:w-2/5 lg:mr-auto">
        <div class="w-full max-w-xl mx-auto flex flex-col justify-start px-4 sm:px-6 pb-20 lg:pt-4">
            <div class="relative overflow-x-auto shadow-md border-2 sm:rounded-lg">

                <form class="pt-4 pr-4 pl-4 pb-4">
                    <label for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
                    <div class="relative">

                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        
                      <fwb-input type="search" id="default-search" v-model="descripcion" @input="buscarArticulo"
                            placeholder="Escriba nombre del artículo">
                            <template #prefix>
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" />
                                </svg>
                            </template>
                            
                        </fwb-input>
                        <div v-if="resultados.length > 0"
                            class="mt-2 w-full absolute left-0 bg-white dark:bg-gray-700 border border-gray-300 rounded-md z-10">
                            <ul>
                                <li v-for="resultado in resultados" :key="resultado.id"
                                    @click="seleccionarArticulo(resultado)"
                                    class="p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 text-black">
                                    {{ resultado.descripcion }}
                                </li>
                            </ul>
                        </div>

                    </div>
                </form>
                <form class="max-w-md mx-auto">
                    <div class="relative z-0 w-full mb-5 group pl-4 pr-4">
                        <input type="text" name="floating_email" id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                            artículo</label>
                    </div>
                    <div class="relative z-0 w-full mb-5 group pl-4 pr-4">
                        <input type="text" name="floating_password" id="floating_password"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="floating_password"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Marca</label>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-5 group pl-4 pr-4">

                            <label for="countries"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color</label>
                            <select id="countries"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Blanco</option>
                                <option value="Negro">Negro</option>
                                <option value="Rojo">Rojo</option>
                                <option value="Amarillo">Amarillo</option>
                            </select>
                        </div>
                        <div class="relative z-0 w-full mb-5 group pl-4 pr-4">
                            <label for="countries"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Talle</label>
                            <select id="countries"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>M</option>
                                <option value="US">L</option>
                                <option value="CA">XL</option>
                                <option value="FR">S</option>
                                <option value="DE">XS</option>
                            </select>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-5 group lg:col-start-2 pl-4 pr-4">
                            <input type="text" name="floating_last_name" id="floating_last_name"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="floating_last_name"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cantidad</label>
                        </div>
                    </div>
                    <div class="flex justify-end pb-4 pl-4 pr-4">
                        <button type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script setup>

import axios from 'axios';
import { ref } from 'vue';
import { FwbInput } from 'flowbite-vue'

const descripcion = ref('');
const resultados = ref([]);

const buscarArticulo = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/tfib/buscarPorDescripcion/${descripcion.value}`);
        resultados.value = response.data;
    } catch (error) {
        console.error(error);
    }
};

const seleccionarArticulo = (articulo) => {
    // Puedes realizar alguna acción al seleccionar un artículo, como cargarlo en algún estado o realizar otra operación.
    console.log('Artículo seleccionado:', articulo);
    //descripcion.value = valor;
    // Actualizar la variable descripcion con el valor del artículo seleccionado
    descripcion.value = articulo.descripcion;

    // Limpiar los resultados y la descripción después de seleccionar
    //resultados.value = [];
    //descripcion.value = "";
};


</script>

