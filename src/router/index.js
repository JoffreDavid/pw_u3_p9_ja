import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HolaMundo from '../views/HolaMundo.vue'
import PreguntaView from '../views/PreguntaView.vue'

const routes = [
{
  path: '/',
  name: 'home',
  component: HomeView
},
{
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
 {
  path:'/hola/:id',
  name: 'hola',
  component: HolaMundo
 },
 {
  path: '/Pregunta',
  name: 'Pregunta',
  component: PreguntaView
 },
 {
  path: '/Pokemon',
  name: "Pokemon",
  component: ()=>import('../views/PokemonView.vue')
 }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
