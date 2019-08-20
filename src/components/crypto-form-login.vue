<template>
  <form class="crypto-login" action method="POST">
    <section>
      <p class="description">pay with Crypto pay</p>
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
    </section>
    <p class="form-control">
      <crypto-button type="submit" @click="clickSubmit">login</crypto-button>
      <span class="forgot">forgot your password?</span>
    </p>
  </form>
</template>

<script>
import cryptoButton from "@/components/crypto-button.vue";

export default {
  components: {
    cryptoButton
  },
  methods: {
    clickSubmit() {
      this.$router.push({ name: "crypto-checkout" });
    }
  }
};
</script>

<style lang="scss" scoped>
.description {
  margin: 1em 0;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
}

section {
  margin: 24px 0;
  .form-control {
    text-align: left;
  }
}

.form-control {
  font-weight: bold;
  font-size: 1em;
  text-transform: uppercase;
  text-align: center;
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
}

.forgot {
  display: inline-block;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.2);
  text-transform: capitalize;
  margin-top: 8px;
}
</style>
