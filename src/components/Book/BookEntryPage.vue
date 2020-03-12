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

                <v-subheader>Autor</v-subheader>
                <v-chip class="mb-2" v-for="(author, i) in book.volumeInfo.authors" :key='i'>
                    {{ author }}
                </v-chip>

                <v-subheader>Categorias</v-subheader>
                <v-chip class="mb-2" v-for="(categories, i) in book.volumeInfo.categories" :key='i'>
                    {{ categories }}
                </v-chip>
                
                <div class="mt-4">    
                    <v-divider class="mb-2"/>
                    <v-btn class="mt-2" text @click="goTopreview">Ver preview</v-btn>
                </div>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'BookEntryPage',
        data() {
            return {
                book: {}
            }
        },
        created() {
            axios.get(`https://www.googleapis.com/books/v1/volumes/${this.$route.params.id}`).then(res => {
              this.book = res.data  
            })
        },
        methods: {
            goToPreview() {
                console.log('00')
                window.open(this.book.volumeInfo.previewLink, '_blank')
            }
        }
    }
</script>