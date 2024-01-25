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
                            {{ article.marca.descripcion }} - {{ article.descripcion }}
                        </th>
                        <td class="px-6 py-4 font-medium text-gray-700">
                            {{ article.talle.descripcion }}
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-700">
                            {{ article.color.descripcion }}
                        </td>
                        <td class="px-6 py-4 font-medium text-green-500">
                            ${{ article.costo}}
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
import axios from 'axios';

const url = "http://localhost:8080/tfib/articulos";
const articles= ref ([]);

const fetchDataWithAxios = async () => {
    try {
        const response = await axios.get(url);
        console.log('Datos recibidos:', response.data);
        articles.value=response.data;
          
    } catch (error) {
        console.error('Hubo un problema al obtener los datos:', error.message);
    }
    
};fetchDataWithAxios();
/*
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
*/
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