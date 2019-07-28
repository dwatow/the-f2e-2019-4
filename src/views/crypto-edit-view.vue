<template>
  <crypto-dialog class="crypto-edit-dialog">
    <crypto-amount class="amount" :amount="amount"></crypto-amount>
    <router-view></router-view>
  </crypto-dialog>
</template>

<script>
import cryptoAmount from "@/components/crypto-amount.vue";
import iconBTC from "@/assets/img/ic-BTC.svg";
import iconETH from "@/assets/img/ic-ETH.svg";
import cryptoSubmit from "@/components/crypto-submit.vue";
import cryptoDialog from "@/components/crypto-dialog.vue";

export default {
  components: {
    cryptoAmount,
    cryptoDialog
  },
  data() {
    return {
      amount: {
        eth: 123,
        usd: 456
      }
    };
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/crypto-base.scss';
.crypto-edit-dialog {
  @include block_base;
}
</style>
