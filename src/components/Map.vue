<template>
    <MapboxMap
        :accessToken="accessToken"
        class="h-full w-full"
        mapStyle="mapbox://styles/mapbox/streets-v12"
        :zoom="1.5"
        @mbCreated="onInit"
    >
        <MapboxGeocoder
            :marker="false"
            types="place"
            @mbClear="$emit('searchClear')"
            @mbResult="$emit('searchResult', $event.result)"
        />
    </MapboxMap>
</template>

<script>
import '@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapboxGeocoder, MapboxMap } from '@studiometa/vue-mapbox-gl';

export default {
    name: 'Map',
    components: { MapboxGeocoder, MapboxMap },
    emits: ['searchResult', 'searchClear'],
    computed: {
        accessToken() {
            return process.env.VUE_APP_MAPBOX_ACCESS_TOKEN;
        }
    },
    methods: {
        onInit(map) {
            map.setProjection('globe');

            map.on('load', function () {
                map.setFog({});
            });
        }
    }
};
</script>
