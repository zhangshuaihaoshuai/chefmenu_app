import Vue from 'vue'
import Router from 'vue-router'
// 导入对应的路由组件
import HomeController from '@/components/tabbar/HomeController.vue' //首页
import CategaryController from '@/components/tabbar/CategaryController.vue' //分类
import MyController from '@/components/tabbar/MyController.vue' //我的

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeController },
    { path: '/categary', component: CategaryController },
    { path: '/my', component: MyController },

  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})
