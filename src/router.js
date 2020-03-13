import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from "./components/Login/LoginPage"
import BookListPage from './components/Book/BookListPage'
import BookEntryPage from './components/Book/BookEntryPage.vue'
import Library from './components/library/LibraryListPage'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/book',
        name: 'booklist',
        component: BookListPage
    },
    {
        path: '/book/:id',
        name: 'bookEntry',
        component: BookEntryPage
    },
    {
        path: '/library',
        name: 'library',
        component: Library
    }
]

export default new Router({
    routes
});