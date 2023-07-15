import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

export const RoutePaths = {
  Posts: '/',
  Users: '/users',
  User: '/users/:id'
}

export const RouteNames = {
  Posts: 'posts',
  Users: 'users',
  User: 'user'
}

const routes: RouteRecordRaw[] = [
  {
    path: RoutePaths.Posts,
    name: RouteNames.Posts,
    component: () => import('@/views/PostsView.vue')
  },
  {
    path: RoutePaths.Users,
    name: RouteNames.Users,
    component: () => import('@/views/UsersView.vue')
  },
  {
    path: RoutePaths.User,
    name: RouteNames.User,
    component: () => import('@/views/UserView.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
