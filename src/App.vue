<template>
  <div id="app">
    <div class="container">
      <stockdata/>
    </div>
  </div>
</template>

<script>
import stockdata from "./components/StockData.vue";

export default {
  name: "app",
  components: {
    stockdata
  }
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
