import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        authToken: '',
        logged: '',
        message: {
            text: '',
            type: '',
        }
    },
    mutations: {
        setAuthToken(state, payload) {
            window.localStorage.authToken = payload
            state.authToken = payload
            state.logged = Boolean(state.authToken)
        },
        setLogged(state, payload) {
            state.logged = payload
        },
        showErrorMessage(state, payload) {
            state.message = {
                text: payload,
                type: 'Error'
            }
        },
        showSuccessMessage(state, payload) {
            state.message = {
                text: payload,
                type: 'Success'
            }
        }
    }
})