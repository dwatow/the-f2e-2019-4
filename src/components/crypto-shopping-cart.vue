<template>
  <div class="crypto-shopping-cart">
    <h2 class="title">
      detail
      <span class="right-item">
        <select name id>
          <option value="ETC">ETC</option>
          <option value="BTC">BTC</option>
        </select>
        <i class="material-icons">unfold_more</i>
      </span>
    </h2>
    <section class="store">
      <h3>store</h3>
      <p>Store Name Inc.</p>
    </section>
    <section class="list">
      <h3>list</h3>
      <p>
        First Product (3)
        <span class="right-item">0.402 ETH</span>
      </p>
      <p>
        Second Product (1)
        <span class="right-item">0.033 ETH</span>
      </p>
    </section>
    <section class="summary">
      <p>amount<span class="right-item">0.033 ETH</span></p>
      <p>gas fee<span class="right-item">0.00021 ETH</span></p>
    </section>
    <section class="total">
      <h3>total<span class="right-item">0.43521 ETH</span></h3>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/mediaquery.scss";
.crypto-shopping-cart {
  padding: 12px 18px;
  margin-bottom: 24px;
  @include mediaquery_large {
    padding: 24px 36px;
  }
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  border-radius: 8px;
  max-width: 350px;
  font-size: 16px;

  border: solid 1px black;
  text-align: left;
}

.title {
  position: relative;
  margin-top: 0;
  margin-bottom: 1em;
  text-transform: uppercase;
  font-weight: bold;
  select {
    border: none;
    background: transparent;
    font-size: 16px;
    font-weight: bold;
    vertical-align: middle;
    appearance: none;
    padding-right: 1em;
    & + i {
      position: absolute;
      right: 0;
      z-index: -1;
      padding: 0.3em 0;
      font-size: 1em;
    }
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
    font-size: 0.8em;
    margin: 4px 0;
    position: relative;
    text-transform: capitalize;
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
    border-width: bold;
  }
}

.list,
.summary {
  & + section {
    &::before {
      content: '';
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 1px;
      background-color: black;
      margin: 8px 0;
    }
    &:last-of-type {
      h3{
        margin-bottom: 0;
      }
    }
  }
}
</style>

