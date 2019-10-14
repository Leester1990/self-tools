import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const anyHome = resolve => require(['@com/home/home'], resolve);
const anyBmi = resolve => require(['@com/bmi/bmi'], resolve);
const anyCar = resolve => require(['@com/car/car'], resolve);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: anyHome,
      meta: {
        title: "首页"
      }
    },{
      path: '/bmi',
      name: 'bmi',
      component: anyBmi,
      meta: {
        title: "身体质量指数"
      }
    }
    ,{
      path: '/car',
      name: 'car',
      component: anyCar,
      meta: {
        title: "车牌名称"
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
