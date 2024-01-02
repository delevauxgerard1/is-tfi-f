<template>
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 pt-4 md:pt-0">
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
                            Precio
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="article in articles" :key="article.id"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-indigo-100 dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-700 whitespace-nowrap dark:text-white">
                            {{ article.brand }} - {{ article.name }}
                        </th>
                        <td class="px-6 py-4 font-medium text-gray-700">
                            {{ article.size }}
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-700">
                            {{ article.color }}
                        </td>
                        <td class="px-6 py-4 font-medium text-green-500">
                            ${{ article.price }}
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-700">
                            <font-awesome-icon class="pr-2" :icon="['fas', 'pen-to-square']" :style="{ fontSize: '20px', color: '#fbbf24' }" />
                            <font-awesome-icon :icon="['fas', 'trash-can']" :style="{ fontSize: '20px', color: '#ef4444' }" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>

const articles = [
    { id: 1, brand: 'Nike', name: 'Zapatillas Air Max', size: '42', color: 'Negro', price: 120 },
    { id: 2, brand: 'Adidas', name: 'Remera Estampada', size: 'M', color: 'Blanco', price: 30 },
    { id: 3, brand: 'Puma', name: 'Short Deportivo', size: 'L', color: 'Azul', price: 25 },
    { id: 4, brand: 'Converse', name: 'Zapatillas Chuck Taylor', size: '39', color: 'Rojo', price: 80 },
    { id: 5, brand: 'Vans', name: 'Gorra Clásica', size: 'Único', color: 'Gris', price: 20 },
    { id: 6, brand: 'New Balance', name: 'Sweater Cuello Redondo', size: 'XL', color: 'Verde', price: 50 },
    { id: 7, brand: 'Reebok', name: 'Mochila Deportiva', size: 'Único', color: 'Negro', price: 40 },
    { id: 8, brand: 'Fila', name: 'Pantalón Jogger', size: 'S', color: 'Gris', price: 35 },
    { id: 9, brand: 'Under Armour', name: 'Camiseta Sin Mangas', size: 'M', color: 'Azul', price: 28 },
    { id: 10, brand: 'ASICS', name: 'Zapatillas Gel-Kayano', size: '41', color: 'Blanco', price: 150 },
];

</script>