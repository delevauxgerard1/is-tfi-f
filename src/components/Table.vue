<template>
    <div class="relative w-5/6 mx-auto px-4 sm:px-6 pt-4 md:pt-0">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-indigo-300 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 font-bold">
                            Descripción
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Marca
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Talle
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Cantidad
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Precio
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-indigo-100 dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white">
                            Ejemplo Descripción
                        </th>
                        <td class="px-6 py-4 font-medium text-gray-700">
                            Marca
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-700">
                            Color
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-700">
                            Talle
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-700">
                            999
                        </td>
                        <td class="px-6 py-4 font-medium text-green-500">
                            $9999
                        </td>
                        <td class="px-6 py-4 font-medium">
                            <font-awesome-icon
                                class="pr-2" :icon="['fas', 'pen-to-square']"
                                :style="{ fontSize: '20px', color: '#fbbf24', cursor: 'pointer' }" />
                            <font-awesome-icon
                                :icon="['fas', 'trash-can']"
                                :style="{ fontSize: '20px', color: '#ef4444', cursor: 'pointer' }" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
</script>