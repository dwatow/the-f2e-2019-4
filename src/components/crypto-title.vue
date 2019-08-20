<template>
  <div class="crypto-title">
    <cryptoPayLogo fill="#6200FF"></cryptoPayLogo>
    <div class="crypto-amount">
      <i class="material-icons">shopping_cart</i>
      <span class="amount-eth">0.43521 ETH</span>
      <br />
      <span class="amount-usd">$97.92 USD</span>
    </div>
  </div>
</template>

<script>
import cryptoPayLogo from "@/assets/img/logo-crypto-pay.svg";
export default {
  components: {
    cryptoPayLogo
  }
};
</script>


<style lang="scss" scoped>
@import "@/assets/scss/mediaquery.scss";

.crypto-title {
  text-align: left;
  font-size: 20px;
  padding-bottom: 24px;
  margin-bottom: 24px;
  font-family: "Open Sans", sans-serif;
}

.crypto-title {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 100%;
    width: 100%;
    height: 1px;
    background-color: rgba(244, 244, 244, 1);
  }
}

.crypto-title {
  .crypto-amount {
    float: right;
  }
  &::after {
    content: "";
    display: block;
    clear: right;
  }
}

.crypto-amount {
  text-align: right;
  text-transform: uppercase;
  font-size: 20px;

  .material-icons,
  .amount-eth {
    vertical-align: bottom;
  }

  .material-icon {
    font-size: 1.2em;
  }
  .amount-usd {
    font-size: 0.8em;
    color: rgba(0, 0, 0, 0.6);
  }
}

svg {
  @include mediaquery_large {
    transform: scale(1.2);
  }
  transform: scale(1);
  transform-origin: 0 0;
}
</style>
