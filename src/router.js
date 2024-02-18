import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/notes',
    name: 'notes',
    component: () => import('./views/Notes.vue')
  },
  {
    path: '/notes-edit/:id',
    name: 'EditNote',
    component: () => import('./views/EditNote.vue')
  },
  {
    path: '/status',
    name: 'status',
    component: () => import('./views/Status.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
