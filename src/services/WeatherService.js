import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getWeather(query) {
        return apiClient.get(`/weather?query=${encodeURIComponent(query)}`);
    }
};
