<template>
  <button class="crypto-button" :class="type" @click.prevent="$emit('click', $event)"><slot></slot></button>
</template>

<script>
export default {
  props: {
    type: String
  }
}
</script>


<style lang="scss" scoped>
.crypto-button {
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
  color: #fff;
  border: 1px solid rgba(98, 0, 255, 1);
  background-color: rgba(98, 0, 255, 1);
}

.cancel {
  color: black;
  border: 1px solid black;
  background-color: #fff;
}

</style>
