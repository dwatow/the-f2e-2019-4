<template>
  <div class="column" :class="columnSize"><slot></slot></div>
</template>

<script>
export default {
  props: {
    all: Number,
    desktop: Number
  },
  computed: {
    columnSize() {
      if (this.all && !this.desktop) return `column-${this.all}`;
      else if (this.all && this.desktop)
        return `column-${this.all} column-desktop-${this.desktop}`;
      else return "";
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/mediaquery.scss";
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

  & + .column {
    margin-top: 16px;
  }
  @include mediaquery_large {
    &-desktop-12 {
      width: 100%;
    }

    &-desktop-6 {
      width: 50%;
    }
    & + .column {
      margin-top: 0;
    }
  }
}
</style>
