<template>
  <form action class="crypto-login">
    <section>
      <p class="description">pay with Crypto pay</p>
      <p class="form-control">
        <label for="email">email</label>
        <br />
        <input type="email" id="email" />
      </p>
      <p class="form-control">
        <label for="password">password</label>
        <br />
        <input type="password" id="password" />
      </p>
    </section>
    <p class="form-control">
      <cryptoButton type="submit" @click="login">login</cryptoButton>
      <span class="forgot">forgot your password?</span>
    </p>
  </form>
</template>

<script>
import cryptoButton from '@/components/crypto-button.vue'

export default {
  components: {
    cryptoButton,
  },
  methods: {
    login() {
      this.$router.push({name: 'crypto-checkout'})
    }
  }
}
</script>


<style lang="scss" scoped>
.description {
  margin: 16px 0;
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
    font-family: "Open Sans", sans-serif;
    width: 100%;
    padding: 0 5%;
    height: 54px;
    box-sizing: border-box;
    border: solid 1px black;
    border-radius: 4px;
    margin-top: 2px;
    font-size: 1em;
  }
}



.forgot {
  display: inline-block;
  margin-top: 8px;
  color: rgba(0, 0, 0, 0.2);
  text-transform: capitalize;
}
</style>
