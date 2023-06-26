<script>
import { GoogleMap, Marker } from 'vue3-google-map'

export default {
    name: "Googleocation",
    components: {
        GoogleMap,
        Marker
    },
    data() {
        return {
            apiKey: "AIzaSyBdJ88HN7LTGkHHK5whfaVv8a5ozlx2E_k",
            lat: null,
            lng: null
        }
    },
    mounted() {
        this.$getLocation()
            .then((coordinates) => {    
                this.lat = coordinates.lat
                this.lng = coordinates.lng
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
</script>
<template>
    <GoogleMap style="width: 100%; height: 70vh" :center="{ lat: lat, lng: lng }" :zoom="15">
        <Marker :options="{ position: { lat: lat, lng: lng } }" />
    </GoogleMap>
</template>