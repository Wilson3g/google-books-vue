<template>
    <v-card class="mx-auto book-card">
        <img :src="books.volumeInfo.imageLinks.smallThumbnail" height="200px" width="100%" alt="" class="text-center">
        <v-card-title>
            <h4>
                {{ books.volumeInfo.title.substring(0, maxTitleLength) }}
                <span v-if="books.volumeInfo.title.length > maxTitleLength">
                    ...
                </span>
            </h4>
        </v-card-title>
        
        <v-card-text>
            {{ books.volumeInfo.subtitle || "Sem descrição" }}
        </v-card-text>

        <v-card-actions justify="center">
            <v-btn
                text
                color="deep-purple accent-4"
            >
                Detalhes
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import bookService from './bookService'

    export default {
        name: 'BookItem',
        mixins: [bookService],
        props: {
            books: { type: Object, required: true }
        },
        data() {
            return {
                maxTitleLength: 20
            }
        },
        methods: {
            goToEntryPage() {
                this.$router.push(`/book/${this.books.id}`)
            }
        }
    }
</script>

<style scoped>
    .book-card{
        height: 100%;
    }
</style>