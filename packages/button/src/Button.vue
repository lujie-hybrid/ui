<template>
  <button
    @click="handleClick"
    :class="['my-button', { [`my-button-${type}`]: type !== 'default' }]"
  >
    按钮
  </button>
</template>

<script>
export default {
  name: "MyButton",
  components: {},
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<style lang="scss" scoped>
.my-button {
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  outline: none;
  border: 1px solid rgb(43, 37, 37);
  background-color: #fff;
  border-radius: 10px;
  &-danger {
    color: white;
    background-color: red;
  }
  &-primary {
    color: white;
    background-color: blue;
  }
  & + .my-button {
    margin-left: 20px;
  }
}
</style>
