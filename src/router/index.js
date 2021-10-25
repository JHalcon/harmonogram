import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import formPage from "../views/formPage.vue";
import Form1S1 from "../components/Form1S1.vue";
import Form1S2 from "../components/Form1S2.vue";
import Form1S3 from "../components/Form1S3.vue";
import Form1S4 from "../components/Form1S4.vue";
Vue.use(VueRouter);

const routes = [
  /*
  {
    path: "/",
    name: "Home",
    component: Home,
  },*/
  {
    path: "/FP",
    name: "formPage",
    component: formPage,
    children:[{
      path:"/FP/oneS",
      component:Form1S1,
    },{
    path:"/FP/twoS",
    component:Form1S2,
    },
    {
      path:"/FP/threeS",
      component:Form1S3,
      },
      {
        path:"/FP/fourSF",
        component:Form1S4,
        },
  
  ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];
//router.push('/OneS');
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
