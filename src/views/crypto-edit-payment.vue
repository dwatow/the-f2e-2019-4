<template>
  <div class="crypto-edit-payment">
    <h2>
      <i class="material-icons">arrow_back</i>
      <span>edit payment</span>
    </h2>
    <section>
      <h3>asset</h3>
      <row>
        <column :all="12">
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
        </column>
      </row>
    </section>
    <section>
      <h3 class="from-to">
        from
        <span class="to">to</span>
      </h3>
      <row>
        <column :all="12">
          <buttons-group class="pay_direct">
            <div>
              <span class="name">general account</span>
              <br />
              <span class="content">0x3e…8C5c</span>
            </div>
            <div class="qrcode">
              <span class="name">store Name</span>
              <br />
              <span class="content">0xd3…4hgr</span>
              <iconQrcode></iconQrcode>
            </div>
            <i class="material-icons">arrow_forward</i>
          </buttons-group>
        </column>
      </row>
    </section>
    <section>
      <h3>transaction fee</h3>
      <row>
        <column :all="12">
          <buttons-group class="pay_speed">
            <div>
              <span class="name">slow</span>
              <br />
              <span class="content">0.00008 ETH</span>
            </div>
            <div>
              <span class="name">average</span>
              <br />
              <span class="content">0.00021 ETH</span>
            </div>
            <div>
              <span class="name">fast</span>
              <br />
              <span class="content">0.00042 ETH</span>
            </div>
          </buttons-group>
        </column>
      </row>
    </section>
    <slot></slot>
    <section>
      <row>
        <column :all="12" :desktop="6">
          <crypto-button type="cancel">cancel</crypto-button>
        </column>
        <column :all="12" :desktop="6">
          <crypto-button type="submit">continue</crypto-button>
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
import buttonsGroup from "@/components/buttons-group.vue";
import cryptoButton from "@/components/crypto-button.vue";

export default {
  components: {
    iconBTC,
    iconETH,
    row,
    column,
    iconQrcode,
    buttonsGroup,
    cryptoButton
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mediaquery.scss";

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
}

.pay_way {
  text-align: center;
  div {
    padding: 0.9em 0;
  }
}
.pay_direct {
  div {
    font-size: 14px;
    // padding: 1em 0.625em;
    padding: 1em 1.5em;
    @include mediaquery_large {
      font-size: 16px;
    }
  }
}
.pay_speed {
  div {
    padding: 1em 1em;
    font-size: 14px;
    @include mediaquery_large {
      font-size: 16px;
    }
  }
}

.pay_way,
.pay_speed {
  div {
    &:hover {
      border: solid 1px white;
      filter: invert(1);
    }
  }
}

.pay_way {
  .name {
    display: none;
    @include mediaquery_large {
      display: inline;
    }
  }
  span {
    margin: 8px;
    font-weight: bold;
  }
  svg,
  span {
    vertical-align: middle;
  }
}

.pay_direct,
.pay_speed {
  font-weight: normal;
  position: relative;
  text-align: left;
  .name {
    font-weight: bold;
  }
}

.pay_direct {
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
.iconETH {
  .a {
    fill: #fff;
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

.pay_direct {
  .qrcode {
    position: relative;
    svg {
      display: none;
      @include mediaquery_large {
        display: block;
      }
      position: absolute;
      right: 24px;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }
}
</style>
