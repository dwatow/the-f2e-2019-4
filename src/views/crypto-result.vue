<template>
  <crypto-dialog class="crypto-result">
    <crypto-pay-logo fill="#6200FF"></crypto-pay-logo>
    <div class="icon"><i class="material-icons">check_circle</i></div>
    <h2 class="title">Thanks for your purchase!</h2>
    <p class="text">Your order number is: <span id="order_index">CP190719</span><br />
    We’ll email you an confirmation with detail and tracking info</p>
    <crypto-submit>continue shopping</crypto-submit>
  </crypto-dialog>
</template>

<script>
import cryptoPayLogo from "@/assets/img/logo-crypto-pay.svg";
import cryptoSubmit from "@/components/crypto-submit.vue";
import cryptoDialog from "@/components/crypto-dialog.vue";

export default {
  components: {
    cryptoPayLogo,
    cryptoSubmit,
    cryptoDialog
  }
};
</script>


<style lang="scss">
@import "@/assets/scss/crypto-base.scss";

.crypto-result {
  @include block_base;
  text-align: center;
}
</style>

<style lang="scss" scoped>
svg {
  transform: scale(1.2);
  transform-origin: center 0;
}

.icon {
  width: 133px;
  height: 133px;
  margin: 45px auto;
  overflow: hidden;
  i {
    font-size: 133px;
    transform: scale(1.19);
  }
}

.title {
  font-size: 1.5em;
  text-transform: uppercase;
  font-weight: bold;
}
.text {
  font-size: 1em;
  margin: 24px 0;
  line-height: 1.6em;
}

#order_index {
  color: #6200FF;
  font-weight: bold;
}
</style>

