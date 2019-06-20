<template>
  <div class="col right_panel d-flex flex-column vcenter">
    <img src="../assets/icon/ic_whatshot_black_48dp.png" class="mx-auto padBtm50">
    <div v-for="sdata in allstockdata" :key="sdata.id" class="sdata">
      <div v-for="sidedata in sdata.all_summary_page" :key="sidedata.id">
        <div class="m-n">
          <div class="title">Status</div>
          <div class="sdatawrap">
            <div class="info">
              Auth
              <span class="s-block">{{sidedata.Status_Authorise}}</span>
            </div>
            <div class="info">
              Confirm
              <span class="s-block">{{sidedata.Status_Confirm}}</span>
            </div>
          </div>
        </div>
        <div class="m-n">
          <div class="title">Corporate Events</div>
          <div class="sdatawrap">
            <div class="info">
              Pending
              <span class="s-block">{{sidedata.Corpor_Event_Pending}}</span>
            </div>
          </div>
        </div>
        <div class="m-n">
          <div class="title">Uploads</div>
          <div class="sdatawrap">
            <div class="info">
              Pending
              <span class="s-block">{{sidedata.Upload_Pending}}</span>
            </div>
            <div class="info">
              Confirm
              <span class="s-block">{{sidedata.Upload_Confirm}}</span>
            </div>
          </div>
        </div>
        <div class="m-n">
          <div class="title">Reconcilation</div>
          <div class="sdatawrap">
            <div class="info">
              Trade
              <span class="s-block">{{sidedata.Recon_Trade}}</span>
            </div>
            <div class="info">
              Stock
              <span class="s-block">{{sidedata.Recon_Stock}}</span>
            </div>
            <div class="info">
              Bank
              <span class="s-block">{{sidedata.Recon_Bank}}</span>
            </div>
          </div>
        </div>
        <div class="m-n">
          <div class="title">EOD Process</div>
          <div class="sdatawrap">
            <div class="info">
              Done
              <span class="s-block">{{sidedata.EOD_Done}}</span>
            </div>
            <div class="info">
              Pending
              <span class="s-block">{{sidedata.EOD_Pending}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- <span class="s-block">{{sdata}}</span> -->
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
  min-width: 75px;
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
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->