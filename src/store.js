import Vue from "vue";
import Vuex from "vuex";
import API from "@/utils/API.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    me: {
      name: "john Doe",
      phone: "",
      country: "United States",
      city: "New York",
      zip: 12401,
      addr: "132, My Street, Kingston"
    },
    payment: {
      currency: "ETH",
      speed: "average",
      transactionFee: 0.00021
    },
    shopping_cart: {
      store_name: "Store Name Inc.",
      currency_type: "ETH",
      productions: [
        {
          id: 0,
          name: "First Product",
          quantity: 3,
          price: 0.134
        },
        {
          id: 1,
          name: "Second Product",
          quantity: 1,
          price: 0.033
        }
      ]
    }
  },
  mutations: {
    amount(state, amount) {
      state.amount = amount;
    },
    me(state, me) {
      state.me = me;
    },
    payment(state, payment) {
      state.payment = payment;
      state.shopping_cart.currency_type = payment.currency;
      state.shopping_cart.gas_fee = payment.transactionFee;
    },
    shopping_cart(state, shopping_cart) {
      state.shopping_cart = shopping_cart;
    }
  },
  getters: {
    productionsAmount: state => {
      return state.shopping_cart.productions
        .reduce((result, item) => {
          result += item.price * item.quantity;
          return result;
        }, 0)
        .toFixed(3);
    },
    amount: (state, getters) => {
      return (
        Number(getters.productionsAmount) + Number(state.payment.transactionFee)
      );
    },
    me: state => {
      return state.me;
    },
    payment: state => {
      return state.payment;
    },
    shoppingCart: state => {
      return state.shopping_cart;
    },
    transactionFee: state => {
      return state.payment.transactionFee;
    }
  },
  actions: {
    async whoAmI({ commit }) {
      const res = await API.GET("/me");
      commit("me", res);
    },
    async modifyMyself({ getters }) {
      await API.POST("/me", getters.me);
    },
    async fetchShoppingCart({ commit }) {
      const res = await API.GET("/shopping_cart");
      commit("shopping_cart", res);
    },
    async fetchPayment({ commit }) {
      const res = await API.GET("/crypto/payment");
      commit("payment", res);
    },
    async modifyPayment({ getters }) {
      await API.POST("/crypto/payment", getters.payment);
    },
    async checkout() {
      API.POST("/crypto/checkout");
    }
  }
});
