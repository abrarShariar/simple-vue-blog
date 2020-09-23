/* eslint-disable vue/no-unused-vars */
<template>
        <div id="app">
            <h2>
                {{ pageTitle }}
            </h2>
                <!-- <v-row> -->
                    <!-- <v-col cols="12"> -->
                        <!-- <v-row
                            class="grey lighten-5"
                            style="height: 500px"
                        > -->
                            <destination-thumb 
                                :location="location"
                                v-for="(location, index) in locations"
                                :key="index"
                            ></destination-thumb>
                        <!-- </v-row> -->
                    <!-- </v-col> -->
                <!-- </v-row> -->
        </div>
</template>

<script>
import DestinationThumb from './DestinationThumb'
import { locations } from '../data/locations'

export default {
    name: 'DestinationBox',
    components: {DestinationThumb},
    data: function() {
        return {
            pageTitle: 'Your Upcoming Destinations',
            locations: locations
        }
    }
}
</script>

<style lang="scss">

body {
  width: 100vw;
  height: 100vh;
  font-family: 'NTR', sans-serif;
  background: #eee;
}

h1 {
  text-align: center;
}

.location-contain {
  display: flex;
  justify-content: center;
}

.place {
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 320px;
  justify-content: center;
  background: white;
  border: 1px solid #ddd;
  padding: 20px 20px;
  margin: 10px;
  h2 {
    margin: 0;
    text-align: center;
  }
  img {
    margin: 10px;
    align-self: center;
  }
}
</style>