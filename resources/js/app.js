import Vue from 'vue'
import router from './router/index'
import App from './components/App';

require('./bootstrap');

window.Vue = require('vue');

const app = new Vue({
    router,
    ...App
});
