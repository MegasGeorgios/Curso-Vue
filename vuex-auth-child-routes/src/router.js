 import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes' // se han pasado las rutas al archivo routes.js para q no sea tan extenso este (route.js) 
import store from './store'
Vue.use(Router)

const router = new Router({
  routes // importado desde import routes from './routes'
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth) // true si la ruta necesita auth(usuario logueado) para acceder, declarado como meta en routes.js 
  const isLogged = store.state.auth.isLogged //saber si el usuario esta logueado
  
  // si la ruta no require auth y usuario logueado y la ruta a la que accede es /login 
  if ( ! requiresAuth && isLogged && to.path === '/login') {
    // redirecciona a la pag /secret
    return next('/secret')
  } 
  // si la ruta require auth y usuario no logueado
  if (requiresAuth && ! isLogged) {
    //redirigir a login
    next('/login')
  } else {
    next()
  }
})

export default router
