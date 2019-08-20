import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/crypto-pay',
    name: 'crypto-pay',
    component: () => import('./views/crypto-pay.vue')
  }, {
    path: '/form',
    component: () => import('./views/crypto-form-view.vue'),
    children: [{
      path: 'crypto-login',
      name: 'crypto-login',
      component: () => import('./components/crypto-login.vue')
    }, {
      path: 'crypto-checkout',
      name: 'crypto-checkout',
      component: () => import('./components/crypto-checkout.vue')
    }, {
      path: 'crypto-buyer',
      name: 'crypto-buyer',
      component: () => import('./components/crypto-buyer.vue')
    }, {
      path: 'crypto-payment',
      name: 'crypto-payment',
      component: () => import('./components/crypto-payment.vue')
    }]
  }, {
    path: '/crypto-result',
    name: 'crypto-result',
    component: () => import('./views/crypto-result.vue')
  }]
})