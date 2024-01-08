<template>
    <div>
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
                        <th scope="col" class="px-6 py-3">
                            Precio
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
                        <td class="px-12 py-4 font-medium text-orange-600">
                            {{ article.cantidad }}
                        </td>
                        <td class="px-6 py-4 font-medium text-green-500">
                            ${{ article.price }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="mt-4 text-xl font-bold text-green-600 flex justify-between pr-8 pb-4 pl-4">
                <button type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Realizar venta</button>
                <div class="mt-4 text-xl font-bold text-green-600">
                    Total: ${{ calculateTotalPrice().toFixed(2) }}
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
const articles = [
    { id: 1, brand: 'Nike', name: 'Zapatillas Air Max', size: '42', color: 'Negro', cantidad: 1, price: 120 },
    { id: 2, brand: 'Adidas', name: 'Remera Estampada', size: 'M', color: 'Blanco', cantidad: 1, price: 30 },
    { id: 3, brand: 'Puma', name: 'Short Deportivo', size: 'L', color: 'Azul', cantidad: 1, price: 25 },
    { id: 4, brand: 'Converse', name: 'Zapatillas Chuck Taylor', size: '39', color: 'Rojo', cantidad: 1, price: 80 },
];

const calculateTotalPrice = () => {
    return articles.reduce((total, article) => total + article.price, 0);
};
</script>