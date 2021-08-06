<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h3>Titre bleu dans App.vue</h3>
    <HelloWorld msg="Titre bleu dans HelloWorld.vue" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";

h3 {
  color: $blue;
}
</style>
