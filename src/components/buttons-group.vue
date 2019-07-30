<template>
  <div class="buttons-group">
    <slot></slot>
  </div>
</template>


<style lang="scss">
.buttons-group {
  text-transform: capitalize;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  div {
    flex: 1 1 0; // 不要考慮內容
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
