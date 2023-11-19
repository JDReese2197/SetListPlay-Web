import axios from 'axios'

const http = axios.create({
    baseURL: 'https://restcountries.com/v3.1/',
    timeout:10000,
});

export default {
    getCountries(name) {
        return http.get(`/name/${name}`)
    }
}