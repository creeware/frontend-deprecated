import Router from "vue-router";
import routes from "./routes";
import Vue from "vue";

Vue.use(Router);

const router = new Router({
  routes,
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
