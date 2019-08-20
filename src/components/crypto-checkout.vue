<template>
  <div class="crypto-checkout">
    <section class="ship-to">
      <h2>ship to <span class="edit" @click="editBuyer">edit</span></h2>
      <div class="content">
        <div class="content-title">john Doe</div>
        <div class="content-text">132, My Street, Kingston, New York 12401 United States</div>
      </div>
    </section>
    <section class="payment">
      <h2>payment<span class="edit" @click="editPayment">edit</span></h2>
      <h3>asset</h3>
      <buttonsGroup class="pay-way">
        <div>
          <iconETH class="icon-eth"></iconETH>
          <span class="name">Ethereum</span>
          <span class="span">(ETH)</span>
        </div>
        <div>
          <iconBTC></iconBTC>
          <span class="name">Bitcoin</span>
          <span class="span">(BTC)</span>
        </div>
      </buttonsGroup>
      <h3>acount</h3>
      <div class="content">
        <div class="content-title">general account</div>
        <div class="content-text">Balance 2.593 ETH</div>
        <div class="content-amount">- 0.43521 ETH</div>
      </div>
    </section>
    <slot></slot>
    <cryptoButton type="submit" @click="checkout">checkout now</cryptoButton>
  </div>
</template>

<script>
import cryptoButton from '@/components/crypto-button.vue'
import buttonsGroup from '@/components/buttons-group.vue'
import iconETH from '@/assets/img/ic-ETH.svg';
import iconBTC from '@/assets/img/ic-BTC.svg';

export default {
  components: {
    cryptoButton,
    buttonsGroup,
    iconETH,
    iconBTC
  },
  methods: {
    editBuyer () {
      this.$router.push({name: 'crypto-buyer'})
    },
    editPayment () {
      this.$router.push({name: 'crypto-payment'})
    },
    checkout () {
      this.$router.push({name: 'crypto-result'})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mediaquery.scss";

.icon-eth {
  .a {
    fill: #fff;
  }
}

.crypto-checkout {
  section {
    margin-bottom: 24px;
    h2 {
      text-transform: uppercase;
      margin: 8px 0;
      font-size: 24px;
    }
    h2 {
      position: relative;
      .edit {
        cursor: pointer;
        position: absolute;
        right: 0;
        font-size: 16px;
        font-weight: bold;
        color: rgba(98, 0, 255, 1);
        bottom: 0;
      }
    }

    h3 {
      text-transform: uppercase;
      margin: 8px 0;
      margin-top: 16px;
      font-size: 20px;
    }
  }
}

.pay-way {
  text-transform: capitalize;
  text-align: center;
  div {
    padding: .9em 0;
    color: black;
  }
  span {
    margin: 8px;
    font-weight: bold;
  }
  .name {
    display: none;
    @include mediaquery_large {
      display: inline;
    }
  }

  span, 
  svg {
    vertical-align: middle;
  }

  div:hover {
    border: solid 1px white;
    filter: invert(1);
  }
}

.content {
  text-transform: capitalize;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 15px 20px;
  box-sizing: border-box;

  &-title {
    font-size: 1em;
    color: black;
    font-weight: bold;
  }
  &-text {
    font-size: 0.8em;
    color: rgba(0, 0, 0, 0.6);
  }

  position: relative;
  &-amount {
    position: relative;
    @include mediaquery_large {
      position: absolute;
      right: 24px;
    } 
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 1em;
    color: rgba(98, 0, 255, 1);
    font-size: 16px;
    font-weight: bold;
  }
}


</style>
