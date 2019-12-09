/** 引入Vue框架 **/
import Vue from 'vue'
/** 引入router插件 **/
import Router from 'vue-router'

Vue.use(Router)
Vue.config.productionTip = false

/** 引入页面组件,定义路由 **/
const routes = [
  { path: '/hello', component: () => import('@/components/hello'), hidden: false },
  { path: '/HelloWorld', component: () => import('@/components/HelloWorld'), hidden: false },
  { path: '/index', component: () => import('@/components/index'), hidden: false }
]
/** 创建router实例 **/
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})
