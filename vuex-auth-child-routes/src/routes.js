export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/Login.vue'),
  },
  {
    path: '/secret',
    component: () => import('./views/Secret/Secret.vue'),
    // este meta significa que para acceder a esta ruta es requerido autentificacion 
    // se invoca en el archivo route.js "const requiresAuth = ... " 
    meta: { requiresAuth: true }, 
    children: [
      {
        path: 'notes',
        component: () => import('./views/Secret/Notes.vue')
      },
    ]
  }
]