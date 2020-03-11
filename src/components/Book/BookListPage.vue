<template>
    <v-container fluid>
        
        <v-row>
            <v-col cols="12" md="4" lg="3">
                <h4 class="display-1 text-uppercase">Livro</h4>
            </v-col>
        </v-row>

        <v-row cols="12" md="3" v-for="books in bookList" :key="books">
            {{ books.title }}
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'BookListPage',
        data() {
            return {
                bookList: [
                    {title: 'Livro 1'},
                    {title: 'Livro 2'},
                    {title: 'Livro 3'},
                    {title: 'Livro 4'},
                ]
            }
        }
    }
</script>