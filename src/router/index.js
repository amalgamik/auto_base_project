import { createRouter, createWebHashHistory } from 'vue-router'
import StartPage from '../views/StartPage.vue'
import App from '../App.vue'
import { firebase } from "@/firebase/index.js";

const routes = [
	{
		path: '/',
		name: 'StartPage',
		component: StartPage
		// component: () => import('@/views/StartPage.vue')
	},
	{
		path: '/main',
		name: 'Main',
		component: App,
		meta: {
			requiresAuth: true
		  }
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('@/views/Home.vue'),
		meta: {
			requiresAuth: true
		  }
	},
	{
		path: '/faker',
		name: 'Faker',
		component: () => import('@/views/FakerBase.vue'),
		meta: {
			requiresAuth: true
		  }
	},
	{
		path: '/store',
		name: 'Store',
		component: () => import('@/views/Store.vue'),
		meta: {
			requiresAuth: true
		  }
	},
	{
		path: '/store/addComponent',
		name: 'AddComponent',
		component: () => import('@/views/AddComponent.vue'),
		meta: {
			requiresAuth: true
		  }
	},
	{
		path: '/about',
		name: 'About',
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
		meta: {
			requiresAuth: true
		  }
	},
	{
		path: '/signup',
		name: 'signup',
		component: () => import('@/views/Signup.vue')
	},
	{ 
    path: '/404', 
    name: '404', 
    component: () => import ('@/views/NotFound') 
 	}, 
	{ 
    path: '/:pathMatch(.*)*', 
    redirect: '/404' 
  	}
]

const router = createRouter({
	linkActiveClass: "active",
	linkExactActiveClass: "exact-active",
	history: createWebHashHistory(),
	routes
})

router.beforeEach(async (to, from, next) => {
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	if (requiresAuth && !await firebase.getCurrentUser()) {
	  next('/');
	} else {
	  next();
	}
  })

export default router
