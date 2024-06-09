import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ModalsView from '../views/ModalsView.vue'
import PostsView from '../views/PostsView.vue'
import PostsDetailView from '../views/PostsDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/modals',
      name: 'modals',
      component: ModalsView
      // component: () => import('../views/ModalsView.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsView
      // component: () => import('../views/PostsView.vue')
    },
    {
      path: '/postDetails/:id',
      name: 'postDetails',
      component: PostsDetailView
      // component: () => import('../views/PostsDetailView.vue')
    }
  ]
})

export default router
