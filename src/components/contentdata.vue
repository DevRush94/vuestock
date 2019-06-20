<template>
  <div class="col">
    <div v-for="sdata in allstockdata" :key="sdata.id" class="Wrapper_box">
      <div v-for="sd in sdata.deal_summary" :key="sd.id" class="headbanner d-flex justify-equally">
        <div class="item_wrap">
          <div class="title">Authorise</div>
          <div class="main_item_wrap d-flex justify-between">
            <div class="Item_wrapper">
              EQ :
              <span class="s-block">{{sd.Authorise_EQ}}</span>
            </div>
            <div class="Item_wrapper">
              FIS :
              <span class="s-block">{{sd.Authorise_FIS}}</span>
            </div>
            <div class="Item_wrapper">
              OTH :
              <span class="s-block">{{sd.Authorise_OTH}}</span>
            </div>
          </div>
        </div>
        <div class="item_wrap">
          <div class="title">Confirm</div>
          <div class="main_item_wrap d-flex justify-between">
            <div class="Item_wrapper">
              EQ :
              <span class="s-block">{{sd.Confirm_EQ}}</span>
            </div>
            <div class="Item_wrapper">
              FIS :
              <span class="s-block">{{sd.Confirm_FIS}}</span>
            </div>
            <div class="Item_wrapper">
              OTH :
              <span class="s-block">{{sd.Confirm_OTH}}</span>
            </div>
          </div>
        </div>
        <div class="item_wrap">
          <div class="title">Settle</div>

          <div class="main_item_wrap d-flex justify-between">
            <div class="Item_wrapper">
              EQ :
              <span class="s-block">{{sd.Settle_EQ}}</span>
            </div>
            <div class="Item_wrapper">
              FIS :
              <span class="s-block">{{sd.Settle_FIS}}</span>
            </div>
            <div class="Item_wrapper">
              OTH :
              <span class="s-block">{{sd.Settle_OTH}}</span>
            </div>
          </div>
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

<style>
.vcenter {
  justify-content: center;
}
.padBtm50 {
  padding-bottom: 50px;
}
.info {
  display: inline-block;
  background: rgba(107, 118, 203, 0.2);
  padding: 10px;
  text-align: center;
  margin: 0 5px;
}
.sdatawrap {
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.title {
  text-align: center;
  padding: 10px;
}

.m-n {
  margin: 10px -15px;
  background-color: #f7f8fd;
  padding: 15px;
  border-left: 6px solid transparent;
}
.m-n:hover {
  border-left: 6px solid #6b76cb;
}
.item_wrap {
  min-width: 20%;
  padding: 0 30px 30px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: #fff
}
.justify-between {
  justify-content: space-between;
}
</style>