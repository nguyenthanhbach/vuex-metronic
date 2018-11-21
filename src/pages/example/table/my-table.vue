<template>
    <div>
		
        <div class="m-portlet m-portlet--mobile">
            <div class="m-portlet__head">
                <div class="m-portlet__head-caption">
                    <div class="m-portlet__head-title">
                        <h3 class="m-portlet__head-text">
                           My Table
                            <small>data loaded from remote data source</small>
                        </h3>
                    </div>
                </div>
            </div>
            <div class="m-portlet__body">
            <my-table :items="items" :name="'Table'" :totalPage="totalPages" :fields="fields"/>
            </div>
        </div>
    </div>
</template>

<script>
	import {
		mapState,
		mapActions
	} from "vuex";
	import MyTable from "@source/component/table/my-table";


	export default {
		components: {
			"my-table": MyTable,
		},
		data: function () {
			return {
				fields: {
					RecordID: {
						label: "RecordID",
						sortable: true
					},
					OrderID: {
						label: "OrderID",
						sortable: false
					},
					Country: {
						key: "Country",
						label: "Country",
						sortable: true
					},
					ShipCountry: {
						label: 'ShipCountry'
					},
					ShipCity: {
						label: 'ShipCity'
					},
					ShipName: {
						label: 'ShipName'
					},
					ShipAddress: {
						label: 'ShipAddress'
					}
				},
			};
		},
		methods: {
			fetch() {
				this.$store.dispatch("exampleTable/fetch", 1);
			}
		},
		created: function () {
			this.fetch();
		},
		computed: mapState({
			items: state => {
				console.log(state.exampleTable.data)
				//  let dataFetch = state.exampleTable.data;
				return state.exampleTable.data;
				;
			},
			totalPages: state => {
				console.log(state.exampleTable.totalPages)
				return state.exampleTable.totalPages
			}
		}),
		updated: function () {

			console.log('updated')
		}
	};
</script>
