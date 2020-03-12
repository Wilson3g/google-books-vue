import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export const getBooks = (user) => {
    return Vue.http.get(``)
}