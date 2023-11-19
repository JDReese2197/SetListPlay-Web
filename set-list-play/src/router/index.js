// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: {path: '/spotify/login'},
    // component: () => import('@/layouts/default/DefaultLayout.vue'),
    children: [
      {
        path: 'spotify',
        name: 'SpotifyLogin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeLogin.vue'),
      },
      {
        path: 'set-list-play',
        name: 'Home',
        component: () => import('@/views/SetListPlay.vue')
      },
      {
        path: 'spotify/login/callback',
        name: 'SpotifyLoginCallback',
        component: () => import('@/components/SpotifyLoginCallback.vue')
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
