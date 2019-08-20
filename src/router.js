import Vue from "vue";
import Router from "vue-router";
import store from "@/store";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: { name: "crypto-pay" }
    },
    {
      path: "/crypto-pay",
      name: "crypto-pay",
      component: () => import("./views/crypto-pay.vue")
    },
    {
      path: "/form",
      name: "crypto-form",
      component: () => import("./views/crypto-form-view.vue"),
      children: [
        {
          path: "crypto-login",
          name: "crypto-login",
          component: () => import("./components/crypto-form-login.vue")
        },
        {
          path: "crypto-checkout",
          name: "crypto-checkout",
          beforeEnter: async (to, from, next) => {
            await Promise.all([
              store.dispatch("whoAmI"),
              store.dispatch("fetchShoppingCart"),
              store.dispatch("fetchPayment")
            ]);
            await next();
          },
          component: () => import("./components/crypto-form-checkout.vue")
        },
        {
          path: "crypto-buyer",
          name: "crypto-buyer",
          component: () => import("./components/crypto-form-buyer.vue")
        },
        {
          path: "crypto-payment",
          name: "crypto-payment",
          component: () => import("./components/crypto-form-payment.vue")
        },
        {
          path: "*",
          redirect: { name: "crypto-pay" }
        }
      ]
    },
    {
      path: "/crypto-result",
      name: "crypto-result",
      component: () => import("./views/crypto-result.vue")
    },
    {
      path: "/*",
      redirect: { name: "crypto-pay" }
    }
  ]
});
