import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import faker from '../views/FakerBase.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/faker',
		name: 'Faker',
		component: () => import('@/views/FakerBase.vue')
	},
	{
		path: '/Store',
		name: 'Store',
		component: () => import('@/views/Store.vue')
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
	history: createWebHashHistory(),
	routes
})

export default router
