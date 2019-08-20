<template>
  <div class="crypto-edit-buyer">
    <h2 @click="toCheckout">
      <i class="material-icons">arrow_back</i><span>edit buyer</span>
    </h2>
    <section>
      <h3>personal</h3>
      <row>
        <column :all="12" :desktop="6">
          <label>
            full name*
            <input
              type="text"
              placeholder="John doe"
              :value="buyer.name"
              @input="changeName($event.target.value)"
            />
          </label>
        </column>
        <column :all="12" :desktop="6">
          <label>
            phone*
            <input
              type="phone"
              placeholder="+886 912 345 678"
              :value="buyer.phone"
              @input="changePhone($event.target.value)"
            />
          </label>
        </column>
      </row>
    </section>
    <section>
      <h3>shipping</h3>
      <row>
        <column :all="12" :desktop="6">
          <label>
            city*
            <input
              type="text"
              :value="buyer.city"
              @input="changeCity($event.target.value)"
            />
          </label>
        </column>
        <column :all="12" :desktop="6">
          <label>
            zip*
            <input
              type="text"
              :value="buyer.zip"
              @input="changeZip($event.target.value)"
            />
          </label>
        </column>
      </row>
      <row>
        <column :all="12">
          <label>
            address*
            <input
              type="text"
              :value="buyer.addr"
              @input="changeAddr($event.target.value)"
            />
          </label>
        </column>
      </row>
    </section>
    <slot></slot>
    <section>
      <row>
        <column :all="12" :desktop="6">
          <crypto-button type="cancel" @click="toCheckout"
            >cancel</crypto-button
          >
        </column>
        <column :all="12" :desktop="6">
          <crypto-button type="submit" @click="submit">continue</crypto-button>
        </column>
      </row>
    </section>
  </div>
</template>

<script>
import row from "@/components/row.vue";
import column from "@/components/column.vue";
import cryptoButton from "@/components/crypto-button.vue";

export default {
  components: {
    row,
    column,
    cryptoButton
  },
  props: {
    buyer: Object
  },
  methods: {
    changeName(name) {
      const buyer = Object.assign({}, this.buyer, { name });
      this.$emit("onChangeBuyer", buyer);
    },
    changePhone(phone) {
      const buyer = Object.assign({}, this.buyer, { phone });
      this.$emit("onChangeBuyer", buyer);
    },
    changeCity(city) {
      const buyer = Object.assign({}, this.buyer, { city });
      this.$emit("onChangeBuyer", buyer);
    },
    changeZip(zip) {
      const buyer = Object.assign({}, this.buyer, { zip });
      this.$emit("onChangeBuyer", buyer);
    },
    changeAddr(addr) {
      const shipping = Object.assign({}, this.shipping, { addr });
      this.$emit("onChangeShipping", shipping);
    },
    submit() {
      this.$store.dispatch("modifyMyself");
      this.$router.push({ name: "crypto-checkout" });
    },
    toCheckout() {
      this.$router.push({ name: "crypto-checkout" });
    }
  }
};
</script>

<style lang="scss" scpoed>
@import "@/assets/scss/mediaquery.scss";
h2 {
  cursor: pointer;
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

  label {
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    border: solid 1px black;
    border-radius: 4px;
    background-color: #fff;
    color: black;
    font-size: 16px;
    padding: 0.8em 1.5em;
  }
}
</style>
