<template>
  <div class="crypto-payment">
    <h2 @click="backToCheckout"><i class="material-icons">arrow_back</i><span>edit payment</span></h2>
    <section>
      <h3>asset</h3>
      <row>
        <column :all="12">
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
        </column>
      </row>
    </section>
    <section>
      <h3 class="from-to">from <span class="to">to</span></h3>
      <row>
        <column :all="12">
          <buttonsGroup class="pay-direct">
            <div>
              <span class="name">general account</span>
              <br>
              <span class="content">0x3e…8C5c</span>
            </div>
            <div class="qrcode">
              <span class="name">store Name</span>
              <br>
              <span class="content">0xd3…4hgr</span>
              <iconQrcode></iconQrcode>
            </div>
            <i class="material-icons">arrow_forward</i>
          </buttonsGroup>
        </column>
      </row>
    </section>
    <section>
      <h3>transaction fee</h3>
      <row>
        <column :all="12">
          <buttonsGroup class="pay-speed">
            <div>
              <span class="name">slow</span>
              <br>
              <span class="content">0.00008 ETH</span>
            </div>
            <div>
              <span class="name">average</span>
              <br>
              <span class="content">0.00021 ETH</span>
            </div>
            <div>
              <span class="name">fast</span>
              <br>
              <span class="content">0.00042 ETH</span>
            </div>
          </buttonsGroup>
        </column>
      </row>
    </section>
    <slot></slot>
    <section>
      <row>
        <column :all="12" :desktop="6">
          <cryptoButton type="cancel" @click="backToCheckout">cancel</cryptoButton>
        </column>
        <column :all="12" :desktop="6">
          <cryptoButton type="submit" @click="backToCheckout">submit</cryptoButton>
        </column>
      </row>
    </section>
  </div>
</template>

<script>
import cryptoButton from '@/components/crypto-button.vue'
import buttonsGroup from '@/components/buttons-group.vue'
import row from '@/components/row.vue';
import column from '@/components/column.vue';
import iconETH from '@/assets/img/ic-ETH.svg';
import iconBTC from '@/assets/img/ic-BTC.svg';
import iconQrcode from '@/assets/img/ic-qrcode.svg';

export default {
  components: {
    iconETH,
    iconBTC,
    row,
    column,
    cryptoButton,
    buttonsGroup,
    iconQrcode
  },
  methods: {
    backToCheckout() {
      this.$router.push({name: 'crypto-checkout'})
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mediaquery.scss";

h2 {
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  i, span {
    vertical-align: middle;
  }
}

section {
  text-transform: uppercase;
  margin: 24px 0;
  h3 {
    margin: 8px 0;
    font-size: 20px;
  }
  &:last-child {
    margin-bottom: 0;
  }
}

.icon-eth {
  .a {
    fill: #fff;
  }
}

.pay-way {
  text-align: center;
  div {
    padding: .9em 0;
  }

  div:hover {
    color: black;
    border: solid 1px white;
    filter: invert(1);
  }
}

.pay-direct {
  div {
    font-size: 16px;
    padding: 1em 1.5em;
  }
}

.pay-speed {
  div {
    padding: 1em 0.8em;
    font-size: 14px;
    @include mediaquery_large {
      padding: 1em 1em;
      font-size: 16px;
    }

  }

  div:hover {
    color: black;
    border: solid 1px white;
    filter: invert(1);
  }
}

.pay-way{
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

  span, 
  svg {
    vertical-align: middle;
  }
}

.pay-direct,
.pay-speed {
  font-weight: normal;
  position: relative;
  text-align: left;
  .name {
    font-weight: bold;
  }
}

.pay-direct {
  i {
    position: absolute;
    background-color: #000;
    color: #fff;
    font-size: 32px;
    height: 32px;
    width: 32px;
    border-radius: 50000px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
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

.pay-direct {
  .qrcode {
    position: relative;
    svg {
      display: none;
      @include mediaquery_large {
        display: block;
      }

      position: absolute;
      top: 0;
      bottom: 0;
      right: 24px;
      margin: auto;
    }
  }
}

</style>

