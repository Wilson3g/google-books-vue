<template>
    <v-container>
        <v-row v-if="book && book.volumeInfo">
            <v-col v-if="book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail" cols="12" md="3">
                <img :src="book.volumeInfo.imageLinks.smallThumbnail" alt="" class="text-center">
            </v-col>

            <v-col cols="12" md="9">
                <h4 class="display-1 mb-2">{{ book.volumeInfo.title }}</h4>
                <h5 class="headline mb-3">{{ book.volumeInfo.subtitle || "Sem descrição" }}</h5>

                <p class="mt2">{{ book.volumeInfo.description }}</p>

                <div v-if="book.volumeInfo.authors && book.volumeInfo.authors.length">
                    <v-subheader>Autor</v-subheader>
                    <v-chip class="mb-2" v-for="author in book.volumeInfo.authors" :key='author'>
                        {{ author }}
                    </v-chip>    
                </div>
                

                <div v-if="book.volumeInfo.categories && book.volumeInfo.categories.length">
                    <v-subheader>Categorias</v-subheader>
                    <v-chip class="mb-2" v-for="categories in book.volumeInfo.categories" :key='categories'>
                        {{ categories }}
                    </v-chip>
                </div>
                
                <div v-if="book.volumeInfo.previewLink" class="mt-4">    
                    <v-divider class="mb-2"/>
                    <v-btn class="mt-2" text @click="goToPreviewPage(book)">Ver preview</v-btn>
                </div>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import api from '../api/api'
    import bookService from './bookService'

    export default {
        mixins: [bookService, api],
        name: 'BookEntryPage',
        data() {
            return {
                book: {}
            }
        },
        created() {
            this.get(`/volumes/${this.$route.params.id}`).then(res => {
              this.book = res.data  
            })
        },
        methods: {
            
        }
    }
</script>