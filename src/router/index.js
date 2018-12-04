import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import PostsManager from '@/components/PostsManager'
import FunManager from '@/components/FunManager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/posts-manager',
      name: 'PostsManager',
      component: PostsManager
    },
    {
      path: '/fun-manager',
      name: 'FunManager',
      component: FunManager
    }
  ]
})

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: Hello
//     },
//     {
//       path: '/posts-manager',
//       name: 'PostsManager',
//       component: PostsManager,
//       meta: {
//         requiresAuth: false
//       }
//     }
//   ]
// })
