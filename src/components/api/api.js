import axios from 'axios'

const baseUrl = "https://www.googleapis.com/books/v1"

export default {
    name: 'api',
    methods: {
        get(url) {
            return axios.get(baseUrl + url)
        }
    },
}