<template>
    <div>
        <loading :condition="searchOnGoing">
            <v-row>
                <v-col  cols="12" md="3" lg="2" v-for="(shelf, i) in shelfList" :key="i">
                    <library-item :shelf="shelf" /> 
                </v-col>
            </v-row>
        </loading>
    </div>
</template>

<script>
    import loading from '../loading/Loading'
    import libraryItem from './LibraryItem'
    import api from '../api/api'
    
    export default {
        name: 'LibraryList',
        mixins: [api],
        components: {
            loading,
            libraryItem
        },
        data() {
            return {
                shelfList: [{ title: "Estante" }],
                searchOnGoing: false
            }
        },
        created() {
            this.searchOnGoing = true
            this.get('/users/102585049439214881490/bookshelves').then(res => {
                this.shelfList = res.data.items
                this.searchOnGoing = false
            })
        }
    }
</script>