<template>
  <div class="column"><slot></slot></div>
</template>

<style lang="scss">
.column {
  box-sizing: border-box;
  padding: 0 10px;
  float: left;
  line-height: normal;
  font-weight: bold;
  &-12 {
    width: 100%;
  }

  &-6 {
    width: 50%;
  }
}
</style>
