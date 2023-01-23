<template>
    <div class="relative h-screen">
        <Sidebar :show="!!weather && !weatherLoading">
            <template v-if="!!weather && !weatherLoading">
                <div>
                    <h1 class="mb-3 text-3xl font-medium">
                        {{ searchResult.place_name }}
                    </h1>

                    <p class="mb-1">
                        Temperature: {{ weather.temperature }} &#8451;
                    </p>

                    <p class="mb-1">
                        Feels like: {{ weather.feelsLike }} &#8451;
                    </p>

                    <p class="mb-1">Minimum: {{ weather.tempMin }} &#8451;</p>

                    <p class="mb-1">Maximum: {{ weather.tempMax }} &#8451;</p>

                    <p class="mb-1">Pressure: {{ weather.pressure }} mb</p>

                    <p class="mb-1">Humidity: {{ weather.humidity }}%</p>

                    <h2 class="mt-6 mb-2 text-xl font-medium">Wind</h2>

                    <p class="mb-1">Speed: {{ weather.windSpeed }} km/h</p>

                    <p class="mb-1">Degree: {{ weather.windDegree }} deg</p>
                </div>
            </template>
        </Sidebar>

        <Map
            @searchClear="searchResult = null"
            @searchResult="searchResult = $event"
        />
    </div>
</template>

<script>
import Map from '@/components/Map.vue';
import Sidebar from '@/components/Sidebar.vue';
import WeatherService from '@/services/WeatherService';

export default {
    name: 'Home',
    components: { Map, Sidebar },
    data() {
        return {
            searchResult: null,
            weather: null,
            weatherLoading: false
        };
    },
    watch: {
        async searchResult(value) {
            if (!value) {
                this.weather = null;
                return;
            }

            this.weatherLoading = true;

            const { data } = await WeatherService.getWeather(value.place_name);

            this.weather = data;
            this.weatherLoading = false;
        }
    }
};
</script>
