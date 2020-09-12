import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/campaigns/:address",
    name: "Single Campaign",
    component: () => import("../components/CampaignDetails.vue"),
    props: (route) => ({ ...route.params })
  },
  {
    path: "/campaigns/new",
    name: "New Camaign",
    component: () => import("../views/campaigns/newCampaign.vue")
  },
  {
    path: "/campaigns/user",
    name: "User Campaigns",
    component: () => import("../views/campaigns/userCampaigns.vue")
  },
  {
    path: "/campaigns/requests/:id/:address",
    name: "Campaign Request",
    component: () => import("../components/CampaignRequestForm.vue"),
    props: (route) => ({ ...route.params })
  },
  {
    path: "/campaigns/:address/edit",
    name: "Edit Camaign",
    component: () => import("../components/CampaignEditForm.vue"),
    props: (route) => ({ ...route.params })
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
