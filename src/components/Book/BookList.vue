<template>
    <div>
        <v-row>
            <v-col cols="12"> 
                <v-text-field v-model="search" @change="doSearch" label="Pesquise algo..." />
            </v-col>
        </v-row>

            <loading :condition="searchOnGoing">
                <v-row>
                    <v-col  cols="12" md="3" lg="2" v-for="(books, i) in bookList" :key="i">
                        <v-card class="mx-auto">
                            <v-card-title>{{ books.volumeInfo.title }}</v-card-title>
                            <v-card-text>{{ books.volumeInfo.subtitle }}</v-card-text>

                            <v-card-actions>
                                <v-btn text small color="primary">Ver detalhes</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </loading>
                
    </div>
    
</template>

<script>
    import axios from 'axios'
    import loading from '../loading/Loading'

    export default {
        name: 'BookList',
        components: {
            loading
        },
        data() {
            return {
                bookList: [],
                search: '',
                searchOnGoing: false
            }
        },
        methods: {
            doSearch() {
                if(this.search) {
                    this.searchOnGoing = true
                    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.search}`).then(res => {
                        this.bookList = res.data.items
                        this.searchOnGoing = false
                    })
                }
            }
        }
    }
</script>