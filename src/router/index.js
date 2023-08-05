import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CalendarView from "../views/CalendarView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about-us",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/event-calendar",
    name: "calendar",
    component: CalendarView,
  },
  {
    path: "/about",
    redirect: { name: "about" }, // redirect: "/about-us"
  },
  {
    path: "/calendar",
    redirect: { name: "calendar" },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
