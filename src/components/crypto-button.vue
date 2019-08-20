<template>
  <button
    class="crypro-button"
    :class="type"
    @click.prevent="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: String
  }
};
</script>

<style lang="scss">
.crypro-button {
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 3;
}

.submit {
  border: 1px solid #6200ff;
  color: #fff;
  background-color: #6200ff;
}

.cancel {
  border: 1px solid black;
  color: black;
  background-color: #fff;
}
</style>
