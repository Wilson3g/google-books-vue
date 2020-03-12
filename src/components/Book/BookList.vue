<template>
    <div>
        <v-row>
            <v-col cols="12"> 
                <v-text-field v-model="search" @input="doSearch" label="Pesquise algo..." />
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col cols='12' md="4" class="text-center" v-if="!search">
                <p class="overline">Digite algo para pesquisar!</p>
            </v-col>
        </v-row>

            <loading :condition="searchOnGoing">
                <v-row>
                    <v-col  cols="12" md="3" lg="2" v-for="(books, i) in bookList" :key="i">
                        <book-item :books="books" /> 
                    </v-col>
                </v-row>
            </loading>
    </div>
    
</template>

<script>
    import axios from 'axios'
    import loading from '../loading/Loading'
    import bookItem from './BookItem'

    export default {
        name: 'BookList',
        components: {
            loading,
            bookItem
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
                } else {
                    this.search = null
                    this.bookList = []
                }
            }
        }
    }
</script>