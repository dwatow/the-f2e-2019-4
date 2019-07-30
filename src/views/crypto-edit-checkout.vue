<template>
  <div class="crypto-edit-checkout">
    <section class="ship-to">
      <h2>
        ship to
        <span class="edit">edit</span>
      </h2>
      <div class="content">
        <div class="title">john Doe</div>
        <div class="text">132, My Street, Kingston, New York 12401 United States</div>
      </div>
    </section>
    <section class="payment">
      <h2>
        payment
        <span class="edit">edit</span>
      </h2>
      <h3>asset</h3>
      <buttons-group class="pay_way">
        <div>
          <iconETH class="iconETH"></iconETH>
          <span class="name">Ethereum</span>
          <span>(ETH)</span>
        </div>
        <div>
          <iconBTC></iconBTC>
          <span class="name">Bitcoin</span>
          <span>(BTC)</span>
        </div>
      </buttons-group>
      <h3>account</h3>
      <div class="content">
        <div class="title">general account</div>
        <div class="text">Balance 2.593 ETH</div>
        <div class="amount">-{{ amount.eth }} ETH</div>
      </div>
    </section>
    <slot></slot>
    <crypto-button type="submit">checkout now</crypto-button>
  </div>
</template>

<script>
import iconBTC from "@/assets/img/ic-BTC.svg";
import iconETH from "@/assets/img/ic-ETH.svg";
import cryptoButton from "@/components/crypto-button.vue";
import buttonsGroup from "@/components/buttons-group.vue";

export default {
  components: {
    iconBTC,
    iconETH,
    cryptoButton,
    buttonsGroup
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

<style lang="scss" scoped>
@import "@/assets/scss/mediaquery.scss";

section {
  margin-bottom: 24px;
  h2 {
    text-transform: uppercase;
    margin: 8px 0;
    position: relative;
    font-size: 24px;
    .edit {
      cursor: pointer;
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 0.6em;
      text-transform: uppercase;
      color: rgba(98, 0, 255, 1);
    }
  }
  h3 {
    text-transform: uppercase;
    margin-top: 16px;
    margin-bottom: 8px;
    font-size: 20px;
  }

  .pay_way {
    text-transform: capitalize;
    text-align: center;
    div {
      padding: 0.9em 0;
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
    svg,
    span {
      vertical-align: middle;
    }
    div {
      &:hover {
        border: solid 1px white;
        filter: invert(1);
      }
    }
  }
  .iconETH {
    .a {
      fill: #fff;
    }
  }

  .content {
    position: relative;
    text-transform: capitalize;
    font-size: 20px;
    border: 1px solid black;
    border-radius: 4px;
    padding: 15px 20px;
    box-sizing: border-box;
    .title {
      padding-right: 3.6em;
      font-weight: bold;
      font-size: 1em;
      color: black;
      @include mediaquery_large {
        padding-right: 0;
      }
    }
    .text {
      font-size: 0.8em;
      color: rgba(0, 0, 0, 0.6);
      padding-right: 3.6em;
      @include mediaquery_large {
        padding-right: 0;
      }
    }
    .amount {
      position: absolute;
      right: 20px;
      top: 0;
      bottom: 0;
      margin: auto;
      height: 1em;
      color: rgba(98, 0, 255, 1);
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
