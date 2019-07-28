<template>
    <button class="submit" @click="emit('click')"><slot></slot></button>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.submit {
    cursor: pointer;
    width: 100%;
    border: none;
    border-radius: 4px;
    background-color: #6200FF;
    color: #fff;
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    line-height: 3em;
    padding: 3px;
}
</style>

