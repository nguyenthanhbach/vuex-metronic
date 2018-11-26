import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
Vue.use(Router)
import config from "@source/config/index";
import Home from '@source/pages/home/home';

import MainLayout from '@source/pages/layouts/main'

import About from '@source/pages/home/about';
import Dashboard from '@source/pages/home/dashboard';


import ExampleTableBasicVueBootstrap from '@source/pages/example/table/vue-bootstrap';
import ExampleTableMyTable from '@source/pages/example/table/my-table';

import Login from '@source/pages/example/auth/login';


const listRouter = [
	{
		path: '/',
		name: 'main-dashboard',
		component: MainLayout,
		meta: {
			title: 'Home'
		},
		children: [
			{
				path: '/admin/home',
				props: true,
				name: 'admin-home',
				title: 'home',
				component: Home,
				meta: {
					//middleware: auth,
					//pageKey: 'role_view'
				},
			},
			{
				path: config.ROUTER_URL.ADMIN_DASHBOARD,
				props: true,
				name: 'dashboard',
				title: 'DashBoard',
				component: Dashboard,
				meta: {
					//middleware: auth,
					//pageKey: 'role_view'
				},
			},
			{
				path: config.ROUTER_URL.ADMIN_ABOUT,
				props: true,
				name: 'admin-about',
				title: 'about',
				component: About,
				meta: {
					//middleware: auth,
					//pageKey: 'role_view'
				},
			},
			{
				path: config.ROUTER_URL.ADMIN_EXAMPLE_TABLE_BASIC,
				props: true,
				name: 'admin-example-table-basic',
				title: 'admin-example-table-basic',
				component: ExampleTableBasicVueBootstrap,
				meta: {
					title: 'Basic table',
					//middleware: auth,
					//pageKey: 'role_view'
				},
			},
			{
				path: config.ROUTER_URL.ADMIN_EXAMPLE_TABLE_MY_TABLE,
				props: true,
				name: 'admin-example-table-my-table',
				title: 'admin-example-table-my-table',
				component: ExampleTableMyTable,
				meta: {
					title: 'My Table'
				}
			}
		]
	},
	{
		path: config.ROUTER_URL.ADMIN_EXAMPLE_AUTH_LOGIN,
		name: 'login',
		component: Login,
		meta: {
			title: 'Login'
		},
	}
]


const router = new Router({
	//mode: 'history',
	routes: listRouter
});
router.beforeResolve((to, from, next) => {
	// If this isn't an initial page load.
	if (to.name) {
		// Start the route progress bar.
		NProgress.start()
	}
	next()
  })
  
  router.afterEach((to, from) => {
	// Complete the animation of the route progress bar.
	NProgress.done()
  })
export default router