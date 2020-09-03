import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import News from "./views/News.vue";
import PressCenter from "./views/PressCenter.vue";
import Plans from "./views/Plans.vue";
import AddFunds from "./views/AddFunds.vue";
import MyVtell from "./views/MyVtell.vue";
import Contacts from "./views/Contacts.vue";
import CustomerService from "./views/CustomerService.vue";
import Partnership from "./views/Partnership.vue";
import Advantages from "./views/Advantages.vue";
import CorporateServices from "./views/CorporateServices.vue";
import AdvantagesList from "./views/AdvantagesList.vue";
import PlanV1 from "./views/PlanV1.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
//   base: 'http://v-tell-static.s3-us-west-2.amazonaws.com/',
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
    {
      path: "/addfunds",
      name: "addfunds",
      component: AddFunds
    },
    {
      path: "/myvtell",
      name: "myvtell",
      component: MyVtell
    },
    {
      path: "/contact-us",
      name: "contact",
      component: Contacts
    },
    {
      path: "/customer-service",
      name: "customer-service",
      component: CustomerService
    },
    {
      path: "/partnerships",
      name: "partnership",
      component: Partnership
    },
    {
      path: "/advantages",
      name: "advantages",
      component: Advantages
    },
    {
      path: "/corporate-services",
      name: "corporate-services",
      component: CorporateServices
    },
    {
      path: "/advantages-list",
      name: "advantages-list",
      component: AdvantagesList
    },
    {
      path: "/plan-v1",
      name: "plan-v1",
      component: PlanV1
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
