<template>
  <crypto-dialog class="crypto-edit-dialog">
    <crypto-amount class="amount" :amount="amount"></crypto-amount>
    <router-view>
      <crypto-detail class="detail"></crypto-detail>
    </router-view>
  </crypto-dialog>
</template>

<script>
import cryptoAmount from "@/components/crypto-amount.vue";
import cryptoDialog from "@/components/crypto-dialog.vue";
import cryptoDetail from "@/views/crypto-detail.vue";

export default {
  components: {
    cryptoAmount,
    cryptoDialog,
    cryptoDetail
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
@import "@/assets/scss/crypto-base.scss";
.crypto-edit-dialog {
  @include block_base;
  // overflow: auto;
}
</style>
  
<style lang="scss" scoped>
@import "@/assets/scss/crypto-base.scss";
.crypto-edit-dialog {
  position: relative;
  .detail {
    margin: 24px 0;
    width: 100%;
    @include mediaquery_large {
      margin-top: 0;
      position: absolute;
      top: 0;
      left: calc(100% + 30px);
    }
  }
}
</style>
