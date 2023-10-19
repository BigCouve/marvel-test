import { createRouter, createWebHistory } from 'vue-router'
import CharacterDetails from '../views/CharacterDetails.vue'
import Characters from '../views/Characters.vue'
import Comics from '../views/Comics.vue'
import Contact from '../views/Contact.vue'
import Events from '../views/Events.vue'
import Welcome from '../views/Welcome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Welcome,
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters,
    },{
      path: '/comics',
      name: 'comics',
      component: Comics,
    },{
      path: '/events',
      name: 'events',
      component: Events,
    },{
      path: '/contact',
      name: 'contact',
      component: Contact,
    },{
      path: '/character/:id',
      name: 'character-details',
      component: CharacterDetails,
    },
  ]
})

export default router
