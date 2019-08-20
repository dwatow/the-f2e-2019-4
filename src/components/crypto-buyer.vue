</<template>
  <div class="crypto-buyer">
    <h2 @click="backToCheckout"><i class="material-icons">arrow_back</i><span>edit shipping</span></h2>
    <section>
      <h3>personal</h3>
      <row>
        <column :all="12" :desktop="6">
          <label>full name*
          <input type="text" placeholder="John doe">
          </label>
        </column>
        <column :all="12" :desktop="6">
          <label>phone*
          <input type="phone" placeholder="+886 912 345 678">
          </label>
        </column>
      </row>
    </section>
    <section>
      <h3>shipping</h3>
      <row>
        <column :all="12" :desktop="6"><label>city*<input type="text"></label></column>
        <column :all="12" :desktop="6"><label>zip<input type="text"></label></column>
      </row>
      <row>
        <column :all="12"><label>address*<input type="text"></label></column>
      </row>
    </section>
    <slot></slot>
    <section>
      <row>
        <column :all="12" :desktop="6"><cryptoButton type="cancel" @click="backToCheckout">cancel</cryptoButton></column>
        <column :all="12" :desktop="6"><cryptoButton type="submit" @click="backToCheckout">continue</cryptoButton></column>
      </row>
    </section>
  </div>
</template>

<script>
import cryptoButton from '@/components/crypto-button.vue'
import row from '@/components/row.vue';
import column from '@/components/column.vue';

export default {
  components: {
    row,
    column,
    cryptoButton
  },
  methods: {
    backToCheckout() {
      this.$router.push({name: 'crypto-checkout'})
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  cursor: pointer;
  text-transform: uppercase;
  flex-wrap: bold;
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
    padding: .8em 1.5em;
  }
}
</style>
