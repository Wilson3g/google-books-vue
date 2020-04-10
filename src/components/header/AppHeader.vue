<template>
    <v-app-bar 
        class="secondary--text"
        color="white accent-4"
        outline
        app
        dark
    >
        <v-toolbar-title>Vue book list</v-toolbar-title>

        <v-spacer />
        <v-toolbar-items class="secondary--text">
            <v-btn @click="goToBooks" text>Livros</v-btn> 
            <v-btn @click="goToCollection" text>Minha Coleção</v-btn> 
            <v-btn @click="logout" text>Sair</v-btn> 
        </v-toolbar-items>
        
    </v-app-bar>
</template>

<script>
    export default {
        name: 'AppHeader',

        methods: {
            goToBooks() {
                this.$router.push('/book')
            },
            goToCollection() {
                this.$router.push('/library')
            },
            logout() {
                this.$store.commit('setAuthToken', '')
                this.$router.push('/')
            }
        }
    }
</script>

<style scope>
    
</style>