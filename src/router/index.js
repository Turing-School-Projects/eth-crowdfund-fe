import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/campaigns/:address",
    name: "Single Campaign",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../components/CampaignDetails.vue"),
    props: (route) => ({ ...route.params })
  },
  {
    path: "/campaigns/new",
    name: "New Camaign",
    component: () => import("../views/campaigns/newCampaign.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
