<template>
    <div className="flex flex-col min-h-screen overflow-hidden">

        <!-- Header -->
        <Header />

        <!-- Content -->
        <main class="grow">

            <Logos />
            <Table />
        </main>

    </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Logos from '../components/Logos.Vue'
import Table from '../components/Table.vue'
import { ref } from 'vue'
</script>