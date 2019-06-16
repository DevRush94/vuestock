
<template>
  <div>
    Live Stocks
    <div class="stockdata">
      <div v-for="todo in allstockdata" :key="todo.id" class="todo">{{ todo.title }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "stockdata",
  methods: {
    ...mapActions(["setstockdata"])
  },
  computed: mapGetters(["allstockdata"]),
  created() {
    this.setstockdata();
  }
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
