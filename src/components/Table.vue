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
                            <font-awesome-icon
                                @click="openEditModal(article.id, article.brand, article.name, article.size, article.color, article.price)"
                                class="pr-2" :icon="['fas', 'pen-to-square']"
                                :style="{ fontSize: '20px', color: '#fbbf24', cursor: 'pointer' }" />
                            <font-awesome-icon @click="toggleModal(article.id, article.brand, article.name)"
                                :icon="['fas', 'trash-can']"
                                :style="{ fontSize: '20px', color: '#ef4444', cursor: 'pointer' }" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Editar -->
        <div class="fixed inset-0 flex items-center justify-center" :class="{ 'hidden': !showEditModal }">
            <div class="absolute inset-0 bg-gray-800 opacity-50"></div>
            <div class="bg-white p-8 rounded-lg z-10">
                <div class="text-center p-3 flex-auto justify-center leading-6">
                    Editar artículo: {{ editedArticle.name }}
                </div>
                <div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="col-span-1">
                            <label for="editBrand" class="block text-sm font-medium text-gray-700">Marca</label>
                            <input type="text" id="editBrand" v-model="editedArticle.brand"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John" required>
                        </div>
                        <div class="col-span-1">
                            <label for="editName" class="block text-sm font-medium text-gray-700">Nombre</label>
                            <input type="text" id="editName" v-model="editedArticle.name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John" required>
                        </div>
                    </div>
                    <div class="mt-4 flex justify-end">
                        <button @click="saveArticleChanges"
                            class="mr-2 px-4 py-2 bg-green-500 text-white rounded-md">Guardar</button>
                        <button @click="closeEditModal" class="px-4 py-2 bg-gray-300 rounded-md">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Eliminar -->
        <div class="fixed inset-0 flex items-center justify-center" :class="{ 'hidden': !showModal }">
            <div class="absolute inset-0 bg-gray-800 opacity-50"></div>
            <div class="bg-white p-8 rounded-lg z-10">
                <div class="text-center p-3 flex-auto justify-center leading-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-red-500 mx-auto"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <p>¿Estás seguro de que quieres eliminar el artículo "{{ articleToDelete.brand }} - {{ articleToDelete.name
                }}"?</p>
                <div class="mt-4 flex justify-end">
                    <button @click="deleteArticle" class="mr-2 px-4 py-2 bg-red-500 text-white rounded-md">Eliminar</button>
                    <button @click="closeModal" class="px-4 py-2 bg-gray-300 rounded-md">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

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

const showModal = ref(false);
const articleToDelete = ref({});

const toggleModal = (articleId, brand, name) => {
    articleToDelete.value = { id: articleId, brand, name };
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};

const deleteArticle = () => {
    const index = articles.findIndex((article) => article.id === articleToDelete.value.id);
    if (index !== -1) {
        articles.splice(index, 1);
    }
    closeModal();
};

const showEditModal = ref(false);
const editedArticle = ref({});

const openEditModal = (articleId, brand, name, size, color, price) => {
    editedArticle.value = { id: articleId, brand, name, size, color, price };
    showEditModal.value = true;
};

const closeEditModal = () => {
    showEditModal.value = false;
};

const saveArticleChanges = () => {
    const index = articles.findIndex((article) => article.id === editedArticle.value.id);
    if (index !== -1) {
        articles[index] = editedArticle.value;
    }
    closeEditModal();
};
</script>