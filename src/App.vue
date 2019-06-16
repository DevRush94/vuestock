<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <StockData/>
  </div>
</template>

<script>
import StockData from "./components/StockData.vue";

export default {
  name: "app",
  components: {
    StockData
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
