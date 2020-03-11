<template>
    <v-app-bar 
        color="green accent-4"
        app
        dark
    >
        <v-toolbar-title>Projeto vue </v-toolbar-title>

        <v-toolbar-items>
            <v-btn text>Livros</v-btn> 
            <v-btn text>Minha Coleção</v-btn> 
            <v-btn text>Sair</v-btn> 
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'AppHeader'
    }
</script>

<style scope>
    
</style>