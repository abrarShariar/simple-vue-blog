<template>
    <!-- <v-container> -->
        <div class="location-contain">
            <div class="locations">
            <div class="place">
                <img :src="location.img" width="235" height="300"/>
                <h2>{{ location.name }}</h2>
                <p>{{ location.desc }}</p>
            </div>
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