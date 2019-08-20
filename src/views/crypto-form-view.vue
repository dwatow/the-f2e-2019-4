<template>
  <crypto-dialog class="crypto-edit-dialog">
    <crypto-amount class="amount" :eth="$store.getters.amount"></crypto-amount>
    <router-view
      :amount="$store.getters.amount"
      :buyer="$store.getters.me"
      :payment="$store.getters.payment"
      @onChangeBuyer="$store.commit('me', $event)"
      @onChangePayment="$store.commit('payment', $event)"
    >
      <crypto-shopping-cart
        class="shopping-cart"
        :detail="$store.getters.shoppingCart"
        :gasFee="$store.getters.transactionFee"
      >
      </crypto-shopping-cart>
    </router-view>
  </crypto-dialog>
</template>

<script>
import cryptoAmount from "@/components/crypto-amount.vue";
import cryptoDialog from "@/components/crypto-dialog.vue";
import cryptoShoppingCart from "@/components/crypto-shopping-cart.vue";

export default {
  components: {
    cryptoAmount,
    cryptoDialog,
    cryptoShoppingCart
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/crypto-base.scss";
.crypto-edit-dialog {
  @include block_base;
}
</style>

<style lang="scss" scoped>
@import "@/assets/scss/crypto-base.scss";
.crypto-edit-dialog {
  position: relative;
  .shopping-cart {
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
