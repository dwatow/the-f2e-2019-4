<template>
  <div class="crypto-edit-payment">
    <h2>
      <i class="material-icons">arrow_back</i>
      <span>edit payment</span>
    </h2>
    <section>
      <h3>asset</h3>
      <row>
        <column class="column-12">
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
        </column>
      </row>
    </section>
    <section>
      <h3 class="from-to">
        from
        <span class="to">to</span>
      </h3>
      <row>
        <column class="column-12">
          <div class="pay_direct button-group">
            <div>
              <span class="name">general account</span>
              <br />
              <span class="code">0x3e…8C5c</span>
            </div>
            <div class="qrcode">
              <span class="name">general account</span>
              <br />
              <span class="code">0x3e…8C5c</span>
              <iconQrcode></iconQrcode>
            </div>
            <i class="material-icons">arrow_forward</i>
          </div>
        </column>
      </row>
    </section>
    <section>
      <h3>transaction fee</h3>
      <row>
        <column class="column-12">
          <div class="pay_speed button-group">
            <div>
              <span class="name">slow</span>
              <br />
              <span class="code">0.00008 ETH</span>
            </div>
            <div>
              <span class="name">average</span>
              <br />
              <span class="code">0.00021 ETH</span>
            </div>
            <div>
              <span class="name">fast</span>
              <br />
              <span class="code">0.00042 ETH</span>
            </div>
          </div>
        </column>
      </row>
    </section>
    <section>
      <row>
        <column class="column-6">
          <button class="cancel">cancel</button>
        </column>
        <column class="column-6">
          <button class="continue">continue</button>
        </column>
      </row>
    </section>
  </div>
</template>

<script>
import row from "@/components/row.vue";
import column from "@/components/column.vue";
import iconBTC from "@/assets/img/ic-BTC.svg";
import iconETH from "@/assets/img/ic-ETH.svg";
import iconQrcode from "@/assets/img/ic-qrcode.svg";

export default {
  components: {
    iconBTC,
    iconETH,
    row,
    column,
    iconQrcode
  }
};
</script>

<style lang="scss" scoped>
h2 {
  text-transform: uppercase;
  font-weight: bold;
  i,
  span {
    vertical-align: middle;
  }
}
section {
  text-transform: uppercase;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 24px 0;
  h3 {
    margin: 8px 0;
    font-size: 20px;
  }
  &:last-child {
    margin-bottom: 0;
  }

  button {
    cursor: pointer;
    width: 100%;
    line-height: 2.7em;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;

    border-radius: 4px;
    &.cancel {
      border: 1px solid black;
      color: black;
      background-color: #fff;
    }
    &.continue {
      border: 1px solid #6200ff;
      border: none;
      color: white;
      background: #6200ff;
    }
  }
}
.iconETH {
  .a {
    fill: #fff;
  }
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

.from-to {
  position: relative;
  .to {
    position: absolute;
    color: black;
    left: 50%;
  }
}

.pay_speed {
  div {
    &:hover {
      border: solid 1px white;
      filter: invert(1);
    }
  }
}

.pay_direct {
  .qrcode {
    position: relative;
    svg {
      position: absolute;
      right: 24px;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }
}

.pay_direct, .pay_speed {
  text-transform: capitalize;
  font-size: 16px;
  font-weight: normal;
  position: relative;
  text-align: left;
  div {
    padding: 16px 24px;
  }
  .name {
    font-weight: bold;
  }
  .code {
  }
  i {
    position: absolute;
    background-color: #000;
    color: #fff;
    border-radius: 200px;
    font-size: 32px;
    height: 32px;
    width: 32px;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
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
</style>
