<template>
  <div class="crypto-pay" @click="click">
    <span class="crypto-pay-text">check out with</span>
    <cryptoPayLogo fill="white"></cryptoPayLogo>
  </div>
</template>

<script>
import cryptoPayLogo from '@/assets/img/logo-crypto-pay.svg'

export default {
  components: {
    cryptoPayLogo
  },
  methods: {
    click() {
      this.$router.push({name: 'crypto-login'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.crypto-pay {
  cursor: pointer;
  max-width: 350px;
  border-radius: 99999px;
  background-image: linear-gradient(
    180deg,
    #8C45FF,
    #6200FF,
    #310080
  );
  box-shadow: 0 4px 8px rgba(98, 0, 255, 0.2);
  font-size: 14px;
  font-weight: bold;
  color: white;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  line-height: (70px/14px);

  &-text {
    padding: 0 0.5em;
  }
  &-text,
  svg {
    vertical-align: middle;
  }
}
</style>
