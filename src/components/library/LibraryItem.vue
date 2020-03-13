<template>
    <div>
        <v-card class="mx-auto">
            <span>{{ shelf.title }}</span>
        </v-card>

        <v-card-text>
            <span>Numero de livros:
                <span class="font-weight-medium ml-2">{{ shelf.volumeCount }}</span>
            </span>
        </v-card-text>
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