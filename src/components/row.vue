<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.row {
  margin: 16px -10px;
  &::after {
    content: "";
    display: block;
    clear: left;
  }
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
