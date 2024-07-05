<script setup lang="ts">
</script>

<template>
    <nav>
        <ul>
            <li>Inicio</li>
            <li>Hoteles</li>
            <li>Promociones</li>
            <li>Sobre Nosotros</li>
        </ul>
    </nav>
</template>

<style scoped>
    nav {
        display: flex;
        flex-direction: row;
        width: 100%;
        background-color: #010101;
        padding: 1.5rem 1rem;
        justify-content: flex-end;
    }

    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        height: 100%;
    }

    ul li {
        background-color: #0300f2ff;
        color: white;
        border-radius: 2px;
        text-align: center;
        padding: 0.5rem 1rem;
        font-weight: bold;
    }
</style>