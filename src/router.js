import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import News from "./views/News.vue";
import PressCenter from "./views/PressCenter.vue";
import Plans from "./views/Plans.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  // base: 'http://v-tell-static.s3-us-west-2.amazonaws.com/',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/news",
      name: "news",
      component: News
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/press-center",
      name: "press-center",
      component: PressCenter
    },
    {
      path: "/plans",
      name: "plans",
      component: Plans
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
