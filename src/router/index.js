import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Gkq from '@/pages/Gkq'
import GkqDynamic from '@/pages/GkqDynamic'
import GkqZt from '@/pages/GkqZt'
import GkqHt from '@/pages/GkqHt'

Vue.use(Router)

const routers = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/gkq',
      component: Gkq,
      children: [
      	{
      		path: '/',
      		name: 'gkqdynamic',
      		component:GkqDynamic
      	},
      	{
      		path: 'dynamic',
      		name: 'dynamic',
      		component:GkqDynamic
      	},
      	{
      		path: 'zt',
      		name: 'zt',
      		component:GkqZt
      	},
      	{
      		path: 'ht',
      		name: 'ht',
      		component:GkqHt
      	}
      ]
    }
  ]
});

export default routers;
