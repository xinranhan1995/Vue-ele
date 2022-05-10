//引入vue文件
import Vue from 'vue'
//引入路由文件
import Router from 'vue-router'
//第三方库需要Use一下才能使用
Vue.use(Router)
//引用页面
import HelloWorld from '@/components/HelloWorld'
import application from'@/components/Application'
import config from '@/components/Config'
import home from '@/components/Home'
import user from '@/User'
import layout from '@/Pages/Layout'
import icon from '@/Pages/Icon'
import button from '@/Pages/Button'
import eltable from '@/Pages/ELtable'
import radio from '@/ELform/radio'
export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path:'/',
    //  name:'Home',
     component:application
    },
    {
      path:'/Index',
   //   name:'Home',
     component:application
    },
    {
      path:'/Application',
    //  name:'Application',
    component:application
    },
    {
      path:'/Home',
    //  name:'Application',
    component:home
    },
    {
      path:'/Config',
     // name:'Config',
      component:config
    },
    {
      path:"/user/:name",
      component:user
    },
    {
      path:"/Layout",
      component:layout

    },
    {
      path:"/Icon",
      component:icon

    },
    {
      path:"/Button",
      component:button

    },
    {
      path:"/ELtable",
      component:eltable

    },
    {
      path:"/radio",
      component:radio

    }
  ]
})
