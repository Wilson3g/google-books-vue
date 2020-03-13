<template>
    <div>
        <v-card class="mx-auto book-card">
            <v-card-title>
                <span>{{ shelf.title }}</span>
            </v-card-title>
        

        <v-card-text>
            <span>Numero de livros:
                <span class="font-weight-medium ml-2">{{ shelf.volumeCount }}</span>
            </span>
        </v-card-text>
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