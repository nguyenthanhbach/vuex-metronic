import Vue from 'vue'
import Vuex from 'vuex'
//import moment from 'moment'
//import auth from './auth'

Vue.use(Vuex)

let state = {
	dataFetch: '',
	authenticated: false,
	resultSubmit: ''
}

const mutations = {
	/*setProfile (state, profile) {
		state.username = profile.username
		state.id = profile.id
		profile.tasks.forEach(el => {
			state.tasks.push({name: el.name, id: el._id})
		})
	},
	addTask (state, task) {
		state.tasks.push({name: task.name, id: task.id})
	},
	removeTask (state, taskname) {
		state.tasks.forEach((el, index) => {
			if (el.name === taskname) {
				state.tasks.splice(index, 1)
			}
		})
	},
	editTask (state, task) {
		state.tasks.forEach((el, index) => {
			if (el.id === task.id) {
				state.tasks[index].name = task.newTaskName
			}
		})
	},
	logout (state) {
		state.username = ''
		state.id = ''
		state.tasks = [],
			state.authenticated = false
	},
	login (state) {
		state.authenticated = true
	}*/

	FETCH_SUCCESS(state, data_fetch) {
		state.dataFetch = data_fetch;
	},
	ADD_SUCCESS(state, result) {
		state.resultSubmit = result;
	}

}

const actions = {
	/*setProfile (context, profile) {
		context.commit('setProfile', profile)
	},
	addTask (context, task) {
		context.commit('addTask', task)
	},
	removeTask (context, taskname) {
		context.commit('removeTask', taskname)
	},
	editTask (context, task) {
		context.commit('editTask', task)
	},
	logout (context) {
		context.commit('logout')
	},
	login (context) {
		context.commit('login')
	},*/
	add({commit}, title) {
		commit('ADD_SUCCESS', 'commit data submit' + title,);
		console.log('call action', title)
	},
	fetch({commit}) {
		commit('FETCH_SUCCESS', 'commit data fetch');
		console.log('fetch data')
	}
}

export default new Vuex.Store({state, mutations, actions})
