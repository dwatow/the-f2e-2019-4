<template>
  <div class="dialog">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/mediaquery.scss";

.dialog {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  background-color: #fff;
  max-width: 540px;
  text-align: left;
  border: none;

  padding: 12px 18px;
  @include mediaquery_large {
    padding: 24px 36px;
  }
  
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
}
</style>
