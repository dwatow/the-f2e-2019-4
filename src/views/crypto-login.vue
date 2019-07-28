<template>
  <crypto-dialog class="crypto-login">
    <crypto-amount class="amount" :amount="amount"></crypto-amount>
    <p class="description">pay with Crypto pay</p>
    <form action method="GET">
      <p class="form-control">
        <label for="mail">email</label>
        <br />
        <input id="mail" type="email" />
      </p>
      <p class="form-control">
        <label for="pwd">password</label>
        <br />
        <input id="pwd" type="password" />
      </p>
      <p class="form-control">
        <crypto-submit class="login-button">login</crypto-submit>
        <span class="forgot">forgot your password?</span>
      </p>
    </form>
  </crypto-dialog>
</template>

<script>
import cryptoAmount from "@/components/crypto-amount";
import cryptoSubmit from "@/components/crypto-submit.vue";
import cryptoDialog from "@/components/crypto-dialog.vue";

export default {
  components: {
    cryptoAmount,
    cryptoSubmit,
    cryptoDialog
  },
  data() {
    return {
      amount: {
        eth: 0.43521,
        usd: 97.92
      }
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/crypto-base.scss";

.crypto-login {
  @include block_base;
}
</style>

<style lang="scss" scoped>

.login-button {
  margin: 8px 0;
}
.description {
  margin: 16px 0;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  clear: right;
}

.form-control {
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  label,
  input {
    color: black;
  }
  input {
    width: 100%;
    padding: 0 5%;
    height: 54px;
    box-sizing: border-box;
    border: solid 1px black;
    border-radius: 4px;
    margin-top: 2px;
    font-family: "Open Sans", sans-serif;
    font-size: 1em;
  }

  &:last-child {
    margin: 0;
    text-align: center;
  }
  .forgot,
  .login-button {
    cursor: pointer;
  }
  .forgot {
    color: rgba(0, 0, 0, 0.2);
    text-transform: capitalize;
  }
}
</style>
