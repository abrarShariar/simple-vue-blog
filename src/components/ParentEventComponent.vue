<template>
    <v-container>
        <h1>{{ pageTitle }}</h1>
        {{ inputDataFromChild }}
        <event-component
            @eventSent="eventSentFromChild"
        >
        </event-component>
    </v-container>
    
</template>
<script>

import EventComponent from "./EventComponent";

export default {
    name: 'ParentEventComponent',
    components: {EventComponent},
    data: function () {
        return {
            pageTitle: 'Parent Event Component',
            inputDataFromChild: ''
        }
    },
    methods: {
        eventSentFromChild () {
            this.inputDataFromChild = event.target.value
        }
    }
}
</script>>