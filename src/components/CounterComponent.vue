<template>
    <v-container>
        <h1>
            {{ pageTitle }}
        </h1>
        <div>
            Counter from store: {{ counter }}
            <br>
            Triple Counter from store: {{ tripleCounter }}
            <v-btn 
                @click="asyncIncrement"
            >
                asyncIncrement
            </v-btn>
        </div>
        <div>
            <counter-test-component></counter-test-component>
        </div>
    </v-container>
</template>

<script>

import CounterTestComponent from './CounterTestComponent';

export default {
    name: 'CounterComponent',
    components: { CounterTestComponent },
    data: function() {
        return {
            pageTitle: 'Counter Component'
        }
    },
    computed: {
        tripleCounter () {
            return this.$store.getters.tripleCounter;
        },
        counter () {
            return this.$store.getters.counter;
        }
    },
    methods: {
        asyncIncrement(){ 
            this.$store.dispatch('asyncIncrement', { duration: 1000, num: 10 })
        }
    }
}
</script>