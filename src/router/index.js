import { createRouter, createWebHashHistory } from 'vue-router'
import StartPage from '../views/StartPage.vue'
import App from '../App.vue'

const routes = [
	{
		path: '/',
		name: 'StartPage',
		component: StartPage
	},
	{
		path: '/main',
		name: 'Main',
		component: App
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('@/views/Home.vue')
	},
	{
		path: '/faker',
		name: 'Faker',
		component: () => import('@/views/FakerBase.vue')
	},
	{
		path: '/store',
		name: 'Store',
		component: () => import('@/views/Store.vue')
	},
	{
		path: '/store/addComponent',
		name: 'AddComponent',
		component: () => import('@/views/AddComponent.vue')
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	}
]

const router = createRouter({
	linkActiveClass: "active",
	linkExactActiveClass: "exact-active",
	history: createWebHashHistory(),
	routes
})

export default router
