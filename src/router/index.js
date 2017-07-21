import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Resource from 'vue-resource'
import Table from '@/components/Table'
import ConfirmPage from '@/components/ConfirmPage.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
     path: '/table',
      name: 'Table',
      component: Table, 
    },
    {
      path: '/confirm',
      name: 'confirmPage',
      component: ConfirmPage,

    }
  ]
})
