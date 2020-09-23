<template>
    <!-- <v-container> -->
        <div class="locations">
            <div class="place">
                <img :src="location.img" width="235" height="500"/>
                <h2>{{ location.name }}</h2>
                <p>{{ location.desc }}</p>
            </div>
        </div>
    <!-- </v-container> -->
</template>
<script>
export default {
    name: 'DestinationThumb',
    props: ['location']
}
</script>