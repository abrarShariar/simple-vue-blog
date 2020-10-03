<template>
    <v-container>
        Counter: {{ counter }}
        <br>
        Triple Counter: {{ tripleCounter }}
    </v-container>
</template>

<script>
export default {
    computed: {
        counter () {
            return this.$store.getters.counter
        },
        tripleCounter () {
            return this.$store.getters.tripleCounter
        }
    }
}
</script>