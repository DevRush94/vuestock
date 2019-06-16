
<template>
  <div>
    Live Stocks
    <div class="stockdata">
      <div v-for="todo in allstockdata" :key="todo.id" class="todo">
        <!-- {{todo.deal}} -->
        <div v-for="todo2 in todo.deal" :key="todo2.id" class="todo">
         Dealer Name : {{todo2.dealer}}
        </div>
      </div>
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
