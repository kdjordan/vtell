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
import PlanV2 from "./views/PlanV2.vue";
import PlanV3 from "./views/PlanV3.vue";
import PlanVmax from "./views/PlanVmax.vue";
import CoverageMap from "./views/CoverageMap.vue";
import Settings from "./views/Settings.vue";
import Faq from "./views/Faq.vue";
import Cart from "./views/Cart.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
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
      path: "/advantages-list/:id",
      name: "advantages-list",
      component: AdvantagesList
    },
    {
      path: "/plan-v1",
      name: "plan-v1",
      component: PlanV1
    },
    {
      path: "/plan-v2",
      name: "plan-v2",
      component: PlanV2
    },
    {
      path: "/plan-v3",
      name: "plan-v3",
      component: PlanV3
    },
    {
      path: "/plan-vmax",
      name: "plan-vmax",
      component: PlanVmax
    },
    {
      path: "/coverage-map",
      name: "coverage-map",
      component: CoverageMap
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings
    },
    {
      path: "/faq",
      name: "faq",
      component: Faq
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
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
