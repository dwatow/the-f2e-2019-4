<template>
  <div class="crypto-button">
    <span class="crypto-button-text">check out with</span>
    <crypto-pay-logo fill="#fff"></crypto-pay-logo>
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
.crypto-button {
  cursor: pointer;
  margin: auto;
  max-width: 350px;
  height: 70px;
  box-shadow: 0 4px 8px rgba(98, 0, 255, 0.2);
  border-radius: 100px;
  background-image: linear-gradient(
    180deg,
    rgba(140, 69, 255, 1),
    rgba(98, 0, 255, 1),
    rgba(49, 0, 128, 1)
  );
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 70px;
  svg {
    max-width: 100%;
  }
  &-text {
    padding: 0 0.5em;
  }
  &-text,
  svg {
    vertical-align: middle;
    color: #fff;
  }
}
</style>
