//router.ts
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      props: (route) => ({ id: route.query.id }),
    },
    {
      path: '/instagram',
      name: 'instagram',
      component: () => import('../views/IgView.vue'),
    },
    {
      path: '/vote',
      name: 'vote',
      component: () => import('../views/VotesView.vue'),
      beforeEnter: (to, from, next) => {
        console.log('Before Enter Vote Route');
        // Check if the user is coming from a specific route (e.g., the route with name 'home')
        if (from.name !== 'instagram') {
          // Redirect the user to the home page or another designated page
          console.log('Redirecting to Home');
          next('/');
        } else {
          // Continue with navigation
          console.log('Continuing with Navigation');
          next();
        }
      },
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: () => import('../views/ThanksView.vue'),
      beforeEnter: (to, from, next) => {
        console.log('Before Enter Thanks Route');
        // Check if the user is coming from a specific route (e.g., the route with name 'vote')
        if (from.name !== 'vote') {
          // Redirect the user to the home page or another designated page
          console.log('Redirecting to Home');
          next('/');
        } else {
          // Continue with navigation
          console.log('Continuing with Navigation');
          next();
        }
      },
    },
    // Wildcard route for handling 404 errors
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component:  () => import('../views/404View.vue'),
    },
  ]
})

export default router
