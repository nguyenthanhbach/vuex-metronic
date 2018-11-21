<template>
<div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
    <b-pagination-nav align="right" :number-of-pages="10" v-model="currentPage" />
    <div>currentPage: {{currentPage}}</div>
</div>
</template>

<script>
import {
    mapState,
    mapActions
} from "vuex";
export default {
    data: function () {
        return {
            currentPage: 1,
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
            }
        };
    },

    created: function () {
        this.fetch();
    },
    mounted: function () {},
    methods: {
        linkGen: function(pageNum) {
            //   // console.log('call page num', pageNum);
            //   // return '#page/' + pageNum + '/foobar'
        },
        fetch: function () {
            this.$store.dispatch("exampleTable/fetch", this.currentPage);
        }
    },
    computed: {
        //...mapState(['exampleTable.data']),
        items: function () {
            return this.$store.state.exampleTable.data
        }
    },
    //   mapState({
    //    items: state => state.exampleTable.data
    //  }),
    watch: {
        currentPage: function () {
            this.$store.dispatch("exampleTable/fetch", this.currentPage);
        }
    }
};
</script>
