<template>
<div class="m-subheader ">
    <div class="d-flex align-items-center">
        <div class="mr-auto">
            <h3 class="m-subheader__title m-subheader__title--separator">
                {{title}}
            </h3>
            <breadcrum />

        </div>
        <!--<div>
            <span class="m-subheader__daterange" id="m_dashboard_daterangepicker">
                <span class="m-subheader__daterange-label">
                    <span class="m-subheader__daterange-title"></span>
                    <span class="m-subheader__daterange-date m&#45;&#45;font-brand"></span>
                </span>
                <a href="#" class="btn btn-sm btn-brand m-btn m-btn&#45;&#45;icon m-btn&#45;&#45;icon-only m-btn&#45;&#45;custom m-btn&#45;&#45;pill">
                    <i class="la la-angle-down"></i>
                </a>
            </span>
        </div>-->
    </div>
</div>
</template>

<script>
	import BreadCrumbComponent from '@source/component/navigation/breadcrum'
    export default {
        components:{
            "breadcrum": BreadCrumbComponent,
        },
        data() {
            return {};
        },
        mounted() {},
        computed: {
            title() {
                return this.$route.meta.title;
            }
        }
    };
</script>
