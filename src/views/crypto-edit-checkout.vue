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
      <div class="pay_way button-group">
        <div>
          <iconETH class="iconETH"></iconETH>
          <span>Ethereum (ETH)</span>
        </div>
        <div>
          <iconBTC></iconBTC>
          <span>Bitcoin (BTC)</span>
        </div>
      </div>
      <h3>account</h3>
      <div class="content">
        <div class="title">general account</div>
        <div class="text">Balance 2.593 ETH</div>
        <div class="amount">-{{amount.eth}} ETH</div>
      </div>
    </section>
    <crypto-submit>checkout now</crypto-submit>
  </div>
</template>

<script>
import iconBTC from "@/assets/img/ic-BTC.svg";
import iconETH from "@/assets/img/ic-ETH.svg";
import cryptoSubmit from "@/components/crypto-submit.vue";

export default {
  components: {
    iconBTC,
    iconETH,
    cryptoSubmit
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
    line-height: 4em;
    text-align: center;
    svg {
      margin: 8px;
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
  .button-group {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    div {
      flex: auto;
      border: solid 1px black;
      background-color: #fff;
      &:first-of-type {
        border-radius: 4px 0 0 4px;
      }
      & + div {
        border-left: none;
      }
      &:last-of-type {
        border-radius: 0 4px 4px 0;
      }
    }
  }

  .content {
    border: 1px solid black;
    border-radius: 4px;
    padding: 15px 20px;
    box-sizing: border-box;
    font-size: 20px;
    // color: black;
    position: relative;
    .title {
      text-transform: capitalize;
      font-weight: bold;
      font-size: 1em;
    }
    .text {
      font-size: 0.8em;
      color: rgba(0, 0, 0, 0.6);
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
