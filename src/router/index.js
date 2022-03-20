import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import todo from "../views/todo.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Register",
    name: "register",
    component: Register,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/todo",
    name: "todo",
    component: todo,
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

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
