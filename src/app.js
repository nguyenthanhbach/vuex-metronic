import Vue from 'vue';
import Welcome from '@source/component/welcome';
import router from './router';
import store from './store/index';
//import App from './App.vue'
// import 'babel-polyfill';
// require('es6-promise').polyfill();
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);



//window.events = new Vue();

//window.flash = function(message, type = 'success') {
//	window.events.$emit('flash', message, type);
//};


//Vue.component('welcome', Welcome);

 new Vue({
 	el: '#app',
 	router,
 	store,
 	//render: h => h(App)
 });
// var app = new Vue({
// 	el: '#app'
//   })