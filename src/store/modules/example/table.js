import * as types from '../../mutation-types';
import {tableExampleApi} from '@source/api/example/tableApi';

const defaultState = {
	data: [],
	totalItems: 0,
	totalPages: 1
};

const actions = {
	async fetch(context, currentPage) {
		let data = await tableExampleApi.getAll(currentPage); 
		if(data.data){
			let dataRespon = data;
			context.commit(types.ADMIN_EXAMPLE_LIST_DATA_TABLE_VUE_BOOTSTRAPETCH_SUCCESS, dataRespon);
		}
	},
};

const mutations = {
	[types.ADMIN_EXAMPLE_LIST_DATA_TABLE_VUE_BOOTSTRAPETCH_SUCCESS] : (state, data_fetch) => {
		state.data = data_fetch.data;
		state.totalItems = data_fetch.meta.total,
		state.totalPages = data_fetch.meta.pages
	},
};

const getters = {
	data: state => state.data,
};

export default {
	namespaced: true,
	state: defaultState,
	getters,
	actions,
	mutations,
};
