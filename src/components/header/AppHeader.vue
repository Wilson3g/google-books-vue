<template>
    <v-app-bar 
        color="green accent-4"
        app
        dark
    >
        <v-toolbar-title>Projeto vue </v-toolbar-title>

        <v-spacer />
        <v-toolbar-items v-if="$store.state.logged">
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
                this.$router.push('/collection')
            },
            logout() {
                this.$store.commit('setAuthToken', '')
                this.$store.commit('setLogged', false)
                this.$router.push('/')
            }
        }
    }
</script>

<style scope>
    
</style>