<template>
    <div>
        <v-snackbar v-model="showMessage" :color="color">
            {{ message }}

            <v-btn
                color="pink"
                text
                @click="showMessage = false"
            >
                Fechar
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
    export default {
        name: 'feedback',
        data() {
            return {
                showMessage: false,
                message: '',
                color: ''
            }
        },
        watch: {
            '$store.state.message.text': 'setMessage',
        },
        methods: {
            setMessage() {
                this.message = this.$store.state.message.text
                this.color = this.$store.message.type == 'Error' ? 'error' : 'success'
                this.showMessage = true
            }
        }
    }
</script>