import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HomeView from '@/views/inicio.vue';
import FaleConosco from '@/views/faleConosco.vue';
import Sobre from '@/views/sobre.vue';
import Causa from '@/views/causa.vue';
import Privacidade from '@/views/privacidade.vue';
import Apoie from '@/views/apoie.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/faleConosco',
    name: 'Fale Conosco',
    component: FaleConosco
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: Sobre
  },
  {
    path: '/causa',
    name: 'causa',
    component: Causa
  },
  {
    path: '/privacidade',
    name: 'privacidade',
    component: Privacidade
  },
  {
    path: '/apoie',
    name: 'apoie',
    component: Apoie
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
