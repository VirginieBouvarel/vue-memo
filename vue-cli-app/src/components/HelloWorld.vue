<template>
  <div class="hello">
    <b-alert show>Coucou !</b-alert>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$marginHeight: 80px;

h3 {
  margin: $marginHeight 0 0;
  color: $blue;
}
</style>
