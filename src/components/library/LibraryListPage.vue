<template>
    <v-container fluid>
        
        <v-row>
            <v-col cols="12" md="4" lg="3">
                <h4 class="display-1 text-uppercase">Estantes</h4>
            </v-col>
        </v-row>

        <library-list />

    </v-container>
</template>

<script>
    import libraryList from './LibraryList'

    export default {
        name: 'LibraryListPage',
        components: {
            libraryList
        },
        data() {
            return {
                
            }
        }
    }
</script>