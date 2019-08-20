<template>
  <div id="app">
    <!-- <router-link to="/crypto-pay">crypto pay</router-link> |
    <router-link to="/form/crypto-login">crypto login</router-link> |
    <router-link to="/form/crypto-checkout">crypto checkout</router-link> |
    <router-link to="/form/crypto-buyer">crypto buyer</router-link> |
    <router-link to="/form/crypto-payment">crypto payment</router-link> |
    <router-link to="/crypto-result">crypto result</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
