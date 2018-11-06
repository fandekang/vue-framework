import Vue from "vue";
import Router from "vue-router";
import Introduce from "@/components/content/Introduce";
import Grid from "@/components/content/grid/Grid";
import VMenu from "@/components/content/menu/VMenu";
import HMenu from "@/components/content/menu/HMenu";
import Panel from "@/components/content/panel/Panel";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Introduce",
      component: Introduce
    }, {
      path: "/VMenu",
      name: "VMenu",
      component: VMenu
    }, {
      path: "/HMenu",
      name: "HMenu",
      component: HMenu
    }, {
      path: "/Grid",
      name: "Grid",
      component: Grid
    }, {
      path: "/Panel",
      name: "Panel",
      component: Panel
    }
  ]
});
