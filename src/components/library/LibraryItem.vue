<template>
    <div>
        <v-card class="mx-auto book-card">
            <span>{{ shelf.title }}</span>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: 'LibraryItem',
        props: {
            shelf: { type: Object, required: true }
        }
    }
</script>