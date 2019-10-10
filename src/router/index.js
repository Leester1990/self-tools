import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const anyHome = resolve => require(['@com/home/home'], resolve);
const anyBmi = resolve => require(['@com/bmi/bmi'], resolve);

export default new Router({
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
        title: "指数"
      }
    }
  ]
})
