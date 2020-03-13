<template>
    <v-text-field 
        v-model="search" 
        @input="doSearch" 
        label="Pesquise algo..." />
</template>

<script>
    export default {
        name: 'SearchInputField',
        data() {
            return {
                search: '',
            }
        },
        methods: {
            doSearch() {
                this.$emit('search', this.search)
            }
        }
    }
</script>