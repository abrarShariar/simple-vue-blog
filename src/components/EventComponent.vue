<template>
    <v-container>
         <h1>{{ pageTitle }}</h1>
         
         <v-text-field
            v-model="textInput"
            label="Input"
            @keyup="sendEvent"
         >
         </v-text-field>
    </v-container>
</template>

<script>
export default {
    data: function () {
        return {
            pageTitle: 'Child Event Component',
            textInput: ''
        }
    },
    methods: {
        sendEvent () {
            this.$emit('eventSent', this.textInput)
        }
    }
}
</script>>
