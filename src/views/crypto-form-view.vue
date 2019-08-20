<template>
  <cryptoDialog class="form-view">
    <cryptoTitle></cryptoTitle>
    <router-view>
      <cryptoShoppingCart class="shopping-cart"></cryptoShoppingCart>
    </router-view>
  </cryptoDialog>
</template>

<script>
import cryptoDialog from "@/components/crypto-dialog.vue";
import cryptoTitle from "@/components/crypto-title.vue";
import cryptoShoppingCart from "@/components/crypto-shopping-cart.vue"

export default {
  components: {
    cryptoDialog,
    cryptoTitle,
    cryptoShoppingCart
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mediaquery.scss";

.form-view {
  position: relative;
  .shopping-cart {
    width: 100%;

    @include mediaquery_large {
      position: absolute;
      top: 0;
      left: calc(100% + 30px);
    }

  }
}

</style>
