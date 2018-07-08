import Vue from 'vue'
import Router from 'vue-router'
import testPage from '@/pages/testPage'
import mainPage from '@/pages/mainPage'


Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'mainPage',
          component: mainPage
      },
      {
          path: '/testPage',
          name: 'testPage',
          component: testPage
      }
  ]
})
