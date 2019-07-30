<template>
  <div class="crypto-edit-shipping">
    <h2><i class="material-icons">arrow_back</i><span>edit shipping</span></h2>
    <section>
      <h3>personal</h3>
      <row>
        <column :all="12" :desktop="6">
          <label>
            full name*
            <input type="text" placeholder="John doe" />
          </label>
        </column>
        <column :all="12" :desktop="6">
          <label>
            phone*
            <input type="phone" placeholder="+886 912 345 678" />
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
            <input type="text" />
          </label>
        </column>
        <column :all="12" :desktop="6">
          <label>
            zip*
            <input type="text" />
          </label>
        </column>
      </row>
      <row>
        <column :all="12">
          <label>
            address*
            <input type="text" />
          </label>
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
import cryptoButton from "@/components/crypto-button.vue";

export default {
  components: {
    row,
    column,
    cryptoButton
  }
};
</script>

<style lang="scss" scpoed>
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
