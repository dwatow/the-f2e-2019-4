import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
    path: "/",
    redirect: { name: "crypto-button" }
  }, {
    path: "/crypto-button",
    name: "crypto-button",
    component: () =>
      import("./views/crypto-button.vue")
  }, {
    path: "/crypto-login",
    name: "crypto-login",
    component: () =>
      import("./views/crypto-login.vue")
  }, {
    path: "/edit",
    name: "crypto-edit",
    component: () => import("./views/crypto-edit-view.vue"),
    children: [{
      path: 'crypto-checkout',
      name: "crypto-checkout",
      component: () => import("./views/crypto-edit-checkout.vue")
    }, {
      path: 'crypto-shipping',
      name: "crypto-shipping",
      component: () => import("./views/crypto-edit-shipping.vue")
    }, {
      path: 'crypto-payment',
      name: "crypto-payment",
      component: () => import("./views/crypto-edit-payment.vue")
    }]
  }, {
    path: "/crypto-detail",
    name: "crypto-detail",
    component: () =>
      import("./views/crypto-detail.vue")
  }, {
    path: "/crypto-result",
    name: "crypto-result",
    component: () =>
      import("./views/crypto-result.vue")
  }]
});
