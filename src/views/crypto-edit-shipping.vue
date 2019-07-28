<template>
  <div class="crypto-edit-shipping">
    <h2>
      <i class="material-icons">arrow_back</i><span>edit shipping</span>
    </h2>
    <section>
      <h3>personal</h3>
      <row>
        <column class="column-6">
          <label>
            full name*
            <input type="text" placeholder="John doe" />
          </label>
        </column>
        <column class="column-6">
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
        <column class="column-6">
        <label>
          city*
          <input type="text" />
        </label>
        </column>
        <column class="column-6">
        <label>
          zip*
          <input type="text" />
        </label>
        </column>
      </row>
      <row>
        <column class="column-12">
        <label>
          address*
          <input type="text" />
        </label>
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
export default {
  components: {
    row,
    column
  }
};
</script>

<style lang="scss" scpoed>
h2 {
  text-transform: uppercase;
  font-weight: bold;
  i, span {
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
    padding: 0.8em 1.5em;
    font-size: 16px;
    border: solid 1px black;
    border-radius: 4px;
    background-color: #fff;
    color: black;
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
</style>
