<template>
  <div id="app">
    <h1>UI</h1>
    <my-button>默认按钮</my-button>
    <my-button @click="clickButton" type="primary">默认按钮,点击</my-button>
    <my-button type="danger">默认按钮</my-button>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    clickButton(e) {
      alert(1);
      console.log(e);
    }
  }
};
</script>

<style lang="scss"></style>
