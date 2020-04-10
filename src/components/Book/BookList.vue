<template>
    <v-container>
        <v-row>
            <v-col cols="12"> 
                <v-text-field
                    v-model="search" 
                    @input="doSearch" 
                    hide-details="false"
                    prepend-inner-icon="mdi-magnify"
                    solo
                    rounded
                    clear-icon="mdi-close-circle"
                    clearable
                    label="Digite o texto da sua pesquisa"
                    type="text"
                />
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
    </v-container>
    
</template>

<script>
    import api from '../api/api'
    import loading from '../loading/Loading'
    import bookItem from './BookItem'
    // import search from '../search/SearchInputField'

    export default {
        name: 'BookList',
        mixins: [api],
        components: {
            loading,
            bookItem,
            // search
        },
        data() {
            return {
                bookList: [],
                search: '',
                searchOnGoing: false,
                lastChange: 0
            }
        },
        methods: {
            doSearch() {
                this.lastChange = new Date().getTime()

                setTimeout(() => {
                    if(new Date().getTime() >= this.lastChange + 300) {
                        if(this.search) {
                            this.searchOnGoing = true
                            this.get(`/volumes?q=${this.search}`).then(res => {
                                this.bookList = res.data.items
                                this.searchOnGoing = false
                            })
                        } else {
                            this.search = null
                            this.bookList = []
                        }
                    }
                }, 500);
            }
        }
    }
</script>