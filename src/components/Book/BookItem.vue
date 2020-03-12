<template>
    <v-card class="mx-auto book-card">
        <img :src="books.volumeInfo.imageLinks.smallThumbnail" alt="" class="text-center">
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

        <v-card-actions>
            <v-btn text small color="primary" @click="goToEntryPage">Ver detalhes</v-btn>
            <v-btn text small color="primary" v-if="books.volumeInfo.previewLink" @click="goToPreviewPage(books)">Preview</v-btn>
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