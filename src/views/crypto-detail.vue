<template>
  <div class="crypto-detail">
    <h2 class="title">detail 
      <label class="right-item"><select v-model="currency_type">
        <option value ="ETH">ETH</option>
        <option value ="BTC">BTC</option>
      </select>
      <i class="material-icons">unfold_more</i></label></h2>
    <section class="store">
      <h3>store</h3>
      <p>{{store_name}}</p>
    </section>
    <section class="list">
      <h3>list</h3>
      <p :key="one.id" v-for="one in productions">{{one.name}} ({{one.quantity}}) <span class="right-item">{{one.price * one.quantity}} {{currency_type}}</span> </p>
    </section>
    <section class="summary">
      <p>amount<span class="right-item">{{amount}} {{currency_type}}</span></p>
      <p>gas fee<span class="right-item">{{gas_fee}} {{currency_type}}</span></p>
    </section>
    <section class="total">
      <h3>total<span class="right-item">{{total}} {{currency_type}}</span></h3>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      store_name: "Store Name Inc.",
      currency_type: "ETH",
      gas_fee: 0.00021,
      productions: [{
        id: 0,
        name: 'First Product',
        quantity: 3,
        price: 0.134
      }, {
        id: 1,
        name: 'Second Product',
        quantity: 1,
        price: 0.033
      }]
    }
  },
  computed: {
    amount () {
      return this.productions.reduce((result, item, index) => {
        result += item.price * item.quantity
        return result
      }, 0).toFixed(3)
    },
    total () {
      return Number(this.amount) + Number(this.gas_fee)
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/crypto-base.scss';
.crypto-detail {
  @include block_base(350px);
  border: 1px solid rgba(0, 0, 0, 1);
  text-align: left;
}
</style>

<style lang="scss" scoped>
.title {
  position: relative;
  margin-top: 0;
  margin-bottom: 16px;
  text-transform: uppercase;
  font-weight: bold;
}

select {
  border: none;
  background-color: transparent;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: bold;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  -ms-appearance: none;
  appearance: none;
  vertical-align: middle;
  padding-right: 1em;
  & + i {
    position: absolute;
    right: 0;
    z-index: -1;
    padding: 0.3em 0;
    font-size: 1em;
  }
}

.right-item {
  position: absolute;
  right: 0;
  height: max-content;
  box-sizing: border-box;
  line-height: normal;
  top: 0;
  bottom: 0;
  margin: auto;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
}

section {
  font-size: 20px;
  h3 {
    text-transform: uppercase;
    font-size: 1em;
    margin: 8px 0;
    position: relative;
  }
  p {
    font-size: .8em;
    margin: 4px 0;
    position: relative;
  }
}
.store {
  margin-bottom: 24px;
}



.summary {
  text-transform: uppercase;
  font-weight: bold;
  p {
    text-transform: uppercase;
    font-weight: bold;
  }
}

.list, .summary {
  // text-transform: uppercase;
  // font-weight: bold;
  & + section {
    &::before {
      content: '';
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 1px;
      margin: 8px 0;
      background-color: #000;
    }
    &:last-child {
      h3 {
        margin-bottom: 0;
      }
    }
  }
}

</style>
