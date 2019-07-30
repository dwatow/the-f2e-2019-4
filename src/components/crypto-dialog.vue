<template>
  <div class="dialog">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.dialog {
  box-shadow: 0 4px 8px rgba(98, 0, 255, 0.2);
  background-color: #ffffff;
  color: black;
  max-width: 540px;
  text-align: left;
  border: none;
}
</style>
