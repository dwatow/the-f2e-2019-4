<template>
  <div class="crypto-title">
    <crypto-pay-logo fill="#6200FF"></crypto-pay-logo>
    <div class="crypto-amount">
      <i class="material-icons">shopping_cart</i>
      <span class="amount_eth">{{ amount.eth }} ETH</span><br />
      <span class="amount_usd">$ {{ amount.usd }} USD</span>
    </div>
  </div>
</template>

<script>
import cryptoPayLogo from "@/assets/img/logo-crypto-pay.svg";
export default {
  components: {
    cryptoPayLogo
  },
  props: {
    amount: Object
  }
};
</script>

<style lang="scss">
.crypto-title {
  text-align: left;
  font-size: 20px;
  width: 100%;
  padding-bottom: 24px;
  margin-bottom: 24px;
  font-family: "Open Sans", sans-serif;
}
</style>

<style lang="scss" scoped>
@import "@/assets/scss/mediaquery.scss";
.crypto-title {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 100%;
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgba(244, 244, 244, 1);
  }
  &::after {
    content: "";
    display: block;
    clear: right;
  }
  svg {
    @include mediaquery_large {
      transform: scale(1.2); // 184/151.18
    }
    transform: scale(1); // 184/151.18
    transform-origin: 0 0;
  }
}
.crypto-amount {
  float: right;
  text-align: right;
  text-transform: uppercase;
  font-size: 20px;
  .material-icons,
  .amount_eth {
    vertical-align: bottom;
  }
  .material-icons {
    font-size: 1.2em;
  }
  .amount_eth {
    font-weight: bold;
  }
  .amount_usd {
    font-size: 0.8em;
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>
