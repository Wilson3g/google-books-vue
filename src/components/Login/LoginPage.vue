<template>
        <v-container fluid>
            <v-row justify="center">
                <v-col cols="12" md="4" lg="3" class="text-center">
                    <h6 class="headline">Login</h6>

                    <v-text-field 
                    label="Token"
                    v-model="token"
                    />

                    <v-btn  
                        color="green" 
                        dark 
                        block
                        class="mb-2"
                        depressed
                        @click="login"
                    >
                    Login
                    </v-btn>
                    <v-btn 
                        text 
                        @click="loginGuest"
                        color="blue"
                    >
                    Entrar como visitante
                    </v-btn>

                </v-col>
            </v-row>
        </v-container>
</template>

<script>
    export default {
        name: 'LoginPage',
        data() {
            return {
                token: '',
            }
        },
        methods: {
            login() {
                if(this.token) {
                    window.localStorage.authToken = this.token
                    this.$store.commit('setAuthToken', this.token)
                    this.$router.push('/book')
                } else {
                    this.$store.commit('showErrorMessage', 'Você deve informar um token')
                    this.$store.commit('setLogged', false)
                    this.showMessage = true
                }
            },
            loginGuest() {
                this.$router.push('/book')
            },
        }
    }
</script>