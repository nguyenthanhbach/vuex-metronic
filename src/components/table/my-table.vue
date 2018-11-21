<template>
<div>
    <table class="table table-striped- table-bordered table-hover table-checkable">
        <thead>
            <tr>
                <th>
                    <label class="m-checkbox"><input class="my-table-check-all" v-model="checkAllRow" type="checkbox" @change="toggleCheckAll"><span></span>		</label>
                </th>
                <th v-bind:key="key" @click="sortByColumnTable(key)" v-for="(column,key) in fields">
                    {{column.label}}
                </th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-bind:key="key" v-for="(item,key) in items">
                <td>
                    <label class="m-checkbox"><input type="checkbox" v-model="item['selected']"><span></span></label>
                </td>
                <td v-bind:key="key_field" v-for="(column,key_field) in fields">
                    {{item[key_field]}}
                </td>
                <td><span class="m-badge  m-badge--danger m-badge--wide">Danger</span></td>
                <td>
                    <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">							<i class="la la-edit"></i>						</a>
                    <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">							<i class="la la-trash"></i>						</a>
                </td>
            </tr>

        </tbody>

    </table>
    <b-pagination-nav align="right" :link-gen="linkGen" :number-of-pages="totalPage" v-model="currentPage" />
    <div>currentPage: {{currentPage}}</div>
</div>
</template>

<script>
let vm
export default {
    name: "my-table",
    data() {
        return {
            currentPage: 1,
            checkAllRow: false,
            ascending: false,
            sortColumn: '',
        };
    },
    props: {
        name: String,
        items: [Object, Array],
        fields: [Object, Array],
        totalPage: Number
    },
    methods: {
        linkGen: page => {
            //console.log("go to page", page);
        },
        toggleCheckAll: (event) => {
            let _this = vm;

            if (_this.checkAllRow) {
                _this.items.map((item, index) => {
                    item['selected'] = true
                    return item
                });
            } else {
                _this.items.map((item, index) => {
                    item['selected'] = false
                    return item
                });
            }

        },
        sortByColumnTable: function (col) {
            if (this.sortColumn === col) {
                this.ascending = !this.ascending;
            } else {
                this.ascending = true;
                this.sortColumn = col;
            }

            let ascending = this.ascending;
            this.items.sort(function (a, b) {
                if (a[col] > b[col]) {
                    return ascending ? 1 : -1
                } else if (a[col] < b[col]) {
                    return ascending ? -1 : 1
                }
                return 0;
            })
        }
    },
    mounted() {
        vm = this
    },
    watch: {
        currentPage: function (newData, oldData) {
            this.$store.dispatch("exampleTable/fetch", this.currentPage);
        },
        items: function () {
            console.log("change total page", this.totalPage);
        }
    }
};
</script>

<style>
table thead th {
    cursor: pointer;
}
</style>
