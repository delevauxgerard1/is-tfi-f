<template>
    <div class="grid grid-cols-6 gap-4">


        <div class="col-span-4 pl-12 pt-4">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-indigo-300 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 font-bold">
                                Artículo
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Talle
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Cantidad
                            </th>
                            <!-- <th scope="col" class="px-6 py-3">
                            Precio
                        </th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="article in articles" :key="article.id"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-indigo-100 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white">
                                {{ article.marca }} - {{ article.descripcion }}
                            </th>
                            <td class="px-6 py-4 font-medium text-gray-700">
                                {{ article.talle.descripcion }}
                            </td>
                            <td class="px-6 py-4 font-medium text-gray-700">
                                {{ article.color.descripcion }}
                            </td>
                            <td class="px-12 py-4 font-medium text-orange-600">
                                {{ article.cantidad }}
                            </td>
                            <!-- <td class="px-6 py-4 font-medium text-green-500">
                            ${{ article.price }}
                        </td> -->
                        </tr>
                    </tbody>
                </table>
                <div class="mt-4 text-xl font-bold text-green-600 flex justify-between pr-8 pb-4 pl-4">
                    <button type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Realizar
                        venta</button>
                    <div class="mt-4 text-xl font-bold text-green-600">
                        Total: $
                    </div>
                </div>

            </div>
        </div>
        <div class="col-span-2 pr-12">
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
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
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
                        <form class="max-w-md mx-auto" @submit.prevent="agregarArticulo">
                            <div class="relative z-0 w-full mb-5 group pl-4 pr-4">
                                <input type="text" name="Campo_Nombre_articulo" id="Campo_Nombre_articulo"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="Campo_Nombre_articulo"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre
                                    artículo</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group pl-4 pr-4">
                                <input type="text" name="Campo_Marca" id="Campo_Marca"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="Campo_Marca"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Marca</label>
                            </div>
                            <div class="grid md:grid-cols-2 md:gap-6">
                                <div class="relative z-0 w-full mb-5 group pl-4 pr-4">

                                    <label for="Select_Color"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color</label>
                                    <select id="Select_Color" v-model="selectedColor"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option v-for="color in colores" :key="color.id" :value="color">{{ color.descripcion
                                        }}
                                        </option>
                                    </select>
                                </div>
                                <div class="relative z-0 w-full mb-5 group pl-4 pr-4">
                                    <label for="Select_Talle"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Talle</label>
                                    <select id="Select_Talle" v-model="selectedTalle"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option v-for="talle in talles" :key="talle.id" :value="talle">{{ talle.descripcion
                                        }}
                                        </option>
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
        </div>

    </div>
</template>


<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { FwbInput } from 'flowbite-vue';

const descripcion = ref('');
const resultados = ref([]);
const articles = ref([]);
const colores = ref([]);
const talles = ref([]);
const selectedColor = ref(null);
const selectedTalle = ref(null);

const buscarArticulo = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/tfib/buscarPorDescripcion/${descripcion.value}`);
        resultados.value = response.data;
    } catch (error) {
        console.error(error);
    }
};

const obtenerColoresYTallesPorDescripcion = (descripcion) => {
    axios.get(`http://localhost:8080/tfib/obtenerTallesPorDescripcion/${descripcion}`)
        .then((tallesResponse) => {
            talles.value = tallesResponse.data;
        })
        .catch((error) => {
            console.error(error);
        });

    axios.get(`http://localhost:8080/tfib/obtenerColoresPorDescripcion/${descripcion}`)
        .then((coloresResponse) => {
            colores.value = coloresResponse.data;
        })
        .catch((error) => {
            console.error(error);
        });
};

const seleccionarArticulo = (articulo) => {
    descripcion.value = articulo.descripcion;
    obtenerColoresYTallesPorDescripcion(articulo.descripcion);
    resultados.value = [];
    Campo_Nombre_articulo.value = articulo.descripcion;
    Campo_Marca.value = articulo.marca.descripcion;

    // Establecer los valores seleccionados en los refs
    selectedColor.value = articulo.color;
    selectedTalle.value = articulo.talle;
};

const agregarArticulo = () => {
    const nuevoArticulo = {
        id: articles.value.length + 1,
        marca: Campo_Marca.value,
        descripcion: Campo_Nombre_articulo.value,
        talle: selectedTalle.value, // No necesitas acceder a la descripción aquí
        color: selectedColor.value, // No necesitas acceder a la descripción aquí
        cantidad: parseInt(floating_last_name.value),
    };
    articles.value.push(nuevoArticulo);
    console.log(articles.value);
    Campo_Nombre_articulo.value = '';
    Campo_Marca.value = '';
    floating_last_name.value = '';
};
</script>

