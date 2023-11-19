import axios from "axios";

const middleware = axios.create({
    baseURL: 'http://localhost:8080/setlistfm',
    timeout:10000,
})

export default {
    async setlistSearch(searchFields) {
        let searchParams = ''
        for(const property in searchFields) {
            if(searchFields[property] && searchFields[property].value && searchFields[property].value !== "") {
                if(searchParams != "") searchParams += "&"
                if(property.toString() == 'date') {
                    searchParams += property.toString() + '=' + searchFields[property].value.toLocaleDateString("en-US")
                }
                else {
                    searchParams += property.toString() + '=' + searchFields[property].value.toString()
                }
            }
        }

        return await middleware.get('/setlist/search?' + searchParams, {
            headers: {
                'Content-Type' : 'application/json'
            }
        })
    }
}