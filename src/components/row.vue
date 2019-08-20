<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.row {
  margin: 16px -10px;
  &:last-child {
    margin-bottom: 0;
  }
  &::after {
    content: "";
    display: block;
    clear: left;
  }
}
</style>
