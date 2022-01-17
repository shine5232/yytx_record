import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import User from '@/view/User'
import Login from '@/view/Login'
import Talk from '@/view/Talk.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      children: [
        {path: 'talk', name: '会话管理', component: Talk, },
        {path: 'user', name: '用户管理', component: User, },
        {path: 'role', name: '权限管理', component: User, },
      ]
    },{
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
});
router.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem('token');
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (token) {  // 通过vuex state获取当前的token是否存在
      next();
    }else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }else {
    next();
  }
});
export default router;
