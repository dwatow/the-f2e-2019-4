<template>
  <cryptoDialog class="crypto-result">
    <cryptoPayLogo fill="#6200FF"></cryptoPayLogo>
    <div class="icon"><i class="material-icons">check_circle</i></div>
    <h2 class="title">Thanks for your purchase!</h2>
    <p class="text">Your order number is: <span id="order-serial">CP190719</span><br>
    We’ll email you an confirmation with detail and tracking info</p>
    <cryptoButton type="submit" @click="continueShopping">continue shopping</cryptoButton>
  </cryptoDialog>
</template>


<script>
import cryptoDialog from "@/components/crypto-dialog.vue"
import cryptoButton from "@/components/crypto-button.vue";
import cryptoPayLogo from "@/assets/img/logo-crypto-pay.svg"

export default {
  components: {
    cryptoDialog,
    cryptoPayLogo,
    cryptoButton
  },
  methods: {
    continueShopping () {
      this.$router.push({name: 'crypto-pay'})
    }
  }
}
</script>

<style lang="scss" scoped>
.crypto-result {
  text-align: center;
}

svg {
  transform: scale(1.2);
  transform-origin: center 0;
}

.icon {
  width: 133px;
  height: 133px;
  margin: 45px auto;
  i {
    font-size: 133px;
    transform: scale(1.2);
  }
}

.title {
  font-size: 1.5em;
  text-transform: uppercase;
  font-weight: bold;
}

.text {
  font-size: 1em;
  margin: 1.5em 0;
  line-height: ((22px + 2px) / 16px);
}

#order-serial {
  color: #6200FF;
  font-weight: bold;
}

</style>

