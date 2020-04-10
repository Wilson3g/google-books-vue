<template>
    <v-container fluid>
        
        <v-row justify="center" class="text-center text--darken-3">
            <v-col cols="12" md="4" lg="3">
                <h4 class="display-1 text-uppercase">BookList</h4>
            </v-col>
        </v-row>

        <book-list />
        
    </v-container>
</template>

<script>
    
    import BookList from './BookList'

    export default {
        name: 'BookListPage',
        components: {
            BookList
        },
    }
</script>