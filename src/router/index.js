import Vue from 'vue'
import Router from 'vue-router'
import WfeConf from '@/views/WfeConf'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WfeConf',
      component: WfeConf
    }
  ]
})
