import * as types from '../mutation-types';
const defaultState = {
	messages: [],
	dataFetch: '',
	authenticated: false,
	resultSubmit: ''
};

const actions = {
	add: (context, title) => {
		context.commit(types.ADMIN_HOME_ADD_SUCCESS, 'commit data submit addddd');
		console.log('call action ssss', title)
	},
	fetch: (context) => {
		context.commit(types.ADMIN_HOME_FETCH_SUCCESS, 'commit data fetch');
		console.log('fetch data')
	},
};

const mutations = {
	[types.ADMIN_HOME_FETCH_SUCCESS] : (state, data_fetch) => {
		state.dataFetch = data_fetch;
	},
	[types.ADMIN_HOME_ADD_SUCCESS] : (state, result) => {
		state.resultSubmit = result;
	}
};

const getters = {
	messages: state => state.messages,
	dataFetch : state => state.dataFetch,
	resultSubmit: state => state.resultSubmit,
};

export default {
	namespaced: true,
	state: defaultState,
	getters,
	actions,
	mutations,
};
