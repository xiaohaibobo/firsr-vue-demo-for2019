import Vue from 'vue'
import VueRouter from 'vue-router'


import login from '@/components/login'
import restCover from '@/components/restCover'
import setCover from '@/components/setCover'
import ptname from '@/components/ptname'
import firstpt from '@/components/firstpt'
import headico from '@/components/headico'
import timet from '@/components/timet'
import beizhu from '@/components/beizhu'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: login,
      meta: { requireLogin: false }
    },
    {
      path: '/restCover',
      component: restCover,
      meta: { requireLogin: true, abc: true }
    },
    {
      path: '/setCover',
      component: setCover,
      meta: { requireLogin: true, abc: true }
    },
    {
      path: '/ptname',
      component: ptname,
      meta: { requireLogin: true }
    },
    {
      path: '/headico',
      component: headico,
      meta: { requireLogin: true }
    },
    {
      path: '/firstpt',
      component: firstpt,
      meta: { requireLogin: true }
    },
    {
      path: '/timet',
      component: timet,
      meta: { requireLogin: true }
    },
    {
      path: '/beizhu',
      component: beizhu,
      meta: { requireLogin: true }
    },
    {
      path: '/',
      redirect: '/setCover'
    }
  ]
})

export default router;
router.beforeEach(function (to, from, next) {

  let token = localStorage.getItem('token');

  //如果页面需要登录,则判断是否已经登录,如果不需要登录,则直接跳转.
  if (to.meta.requireLogin) {
    //如果登录过,继续跳转,没有登录过,跳到登录页
    if (token) {
      next();
    } else {
      next({ path: '/login' });
    }
  } else {
    next();
  }
})