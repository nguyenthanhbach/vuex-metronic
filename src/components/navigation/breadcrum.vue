<template>
 	<ul class="m-subheader__breadcrumbs m-nav m-nav--inline">
		<li class="m-nav__item m-nav__item--home">
			<a href="#" class="m-nav__link m-nav__link--icon">
				<i class="m-nav__link-icon la la-home"></i>
			</a>
		</li>
		<li class="m-nav__separator">-</li>
		<slot v-for="(page, index) in breadcrumbs">
			<li class="m-nav__item" >
				<router-link v-if="index != breadcrumbs.length - 1" :to="{ name: page.RouteName }" class="m-nav__link"><span class="m-nav__link-text">{{page.Title}}</span></router-link>
				<template v-else>
					<a href="" class="m-nav__link">
						<span class="m-nav__link-text">{{page.Title}}</span>
					</a>
				</template>
			</li>
			<li v-if="index != breadcrumbs.length - 1" class="m-nav__separator">-</li>
		</slot>
	</ul>
</template>

<script>
export default {
	name: "BreadCrumbComponent",
	computed: {
		breadcrumbs () {
			var breads = this.$route.matched.map(function (item) {
				return {
					Title: item.meta.title,
					RouteName: item.name
				}
			})

			if (this.$route.params.breadcrumb) {
				breads.push({
					title: this.$route.params.breadcrumb
				})
			}

			return breads
		}
	}
}
</script>
<style>
	.router-link-active{
		color: #222;
	}
</style>
