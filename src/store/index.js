
import Vue from 'vue';
import Vuex from 'vuex';
import homeModule from './modules/home';
import tableModule from './modules/example/table';
Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		home: homeModule,
		exampleTable: tableModule,
	},
});