<template>
  <div class="col">
    <div v-for="sdata in allstockdata" :key="sdata.id" class="Wrapper_box">
      <div v-for="sd in sdata.deal_summary" :key="sd.id" class="headbanner d-flex justify-equally">
        <div class="item_wrap">
          <div class="title f-xs">Authorise</div>
          <div class="main_item_wrap d-flex justify-between">
            <div class="Item_wrapper f-xs text-center">
              EQ
              <span class="s-block f-lg f-semibold">{{sd.Authorise_EQ}}</span>
            </div>
            <div class="Item_wrapper f-xs text-center">
              FIS
              <span class="s-block f-lg f-semibold">{{sd.Authorise_FIS}}</span>
            </div>
            <div class="Item_wrapper f-xs text-center">
              OTH
              <span class="s-block f-lg f-semibold">{{sd.Authorise_OTH}}</span>
            </div>
          </div>
        </div>
        <div class="item_wrap">
          <div class="title f-xs">Confirm</div>
          <div class="main_item_wrap d-flex justify-between">
            <div class="Item_wrapper f-xs text-center">
              EQ
              <span class="s-block f-lg f-semibold">{{sd.Confirm_EQ}}</span>
            </div>
            <div class="Item_wrapper f-xs text-center">
              FIS
              <span class="s-block f-lg f-semibold">{{sd.Confirm_FIS}}</span>
            </div>
            <div class="Item_wrapper f-xs text-center">
              OTH
              <span class="s-block f-lg f-semibold">{{sd.Confirm_OTH}}</span>
            </div>
          </div>
        </div>
        <div class="item_wrap">
          <div class="title f-xs">Settle</div>

          <div class="main_item_wrap d-flex justify-between">
            <div class="Item_wrapper f-xs text-center">
              EQ
              <span class="s-block f-lg f-semibold">{{sd.Settle_EQ}}</span>
            </div>
            <div class="Item_wrapper f-xs text-center">
              FIS
              <span class="s-block f-lg f-semibold">{{sd.Settle_FIS}}</span>
            </div>
            <div class="Item_wrapper f-xs text-center">
              OTH
              <span class="s-block f-lg f-semibold">{{sd.Settle_OTH}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="pad20 f-ll f-semibold">Stock Details</h1>
    <div class="main_stock_data">
      <div v-for="swrap in allstockdata" :key="swrap.id" class="d-flex justify-equally stock_w">
        <!-- {{swrap.deal_details}} -->

        <div v-for="stock in swrap.deal_details" :key="stock.id" class="stock_item">
          <div class="bg1">
            <div class="d-flex justify-between">
              <div class="no-pad">{{stock.deal_ticket_no}}</div>
              <div class="no-pad d-flex align-center f-sm">
                <i>
                  <img src="/ic_add_box_black_48dp.png" width="20" alt>
                </i>
                {{stock.trade_date}}
              </div>
            </div>
            <div class="d-flex justify-between">
              <div class="no-pad">{{stock.security_desc.substring(0,24)}}</div>
              <div class="no-pad d-flex align-center">
                <i>
                  <img src="/ic_face_black_48dp.png" width="20" alt>
                </i>
                {{stock.dealer}}
              </div>
            </div>

            <div>{{stock.settle_date}}</div>
            <div class="text-uppercase f-sm">
              <i>
                <img src="/ic_flight_takeoff_black_48dp.png" width="20" alt>
              </i>
              {{stock.exchange}}
            </div>
            <div class="f-xs">{{stock.broker}}</div>
          </div>
          <div class="bg2">
            <div class="master_port_wrap d-flex no-pad">
              <div
                v-for="portfolio in stock.portfolio"
                :key="portfolio"
                class="d-flex flex-column individual_item fullflex"
              >
                <div class="no-pad f-xs">{{portfolio.name.substring(0,12)}}</div>
                <div class="no-pad f-md f-semibold pTop5">{{portfolio.value}}</div>
              </div>
            </div>
          </div>
          <div class="bg4">
            <div class="d-flex justify-between">
              <div class="no-pad f-sm">Price</div>
              <div class="no-pad f-xl d-flex align-center">
                <i>
                  <img src="/ic_insert_chart_black_48dp.png" width="20" alt>
                </i>
                {{stock.price}}
              </div>
            </div>
            <div class="d-flex justify-between">
              <div class="no-pad f-sm">YTM</div>
              <div class="no-pad f-xl d-flex align-center">{{stock.ytm}}</div>
            </div>

            <div class="d-flex justify-between">
              <div class="no-pad f-sm">Quantity</div>
              <div class="no-pad f-xl d-flex align-center">{{stock.quantity}}</div>
            </div>
          </div>
          <div class="bg3">
            <div class="d-flex justify-between">
              <div class="no-pad f-sm">Account Int</div>
              <div class="no-pad f-xl f-semibold d-flex align-center">{{stock.acc_int}}</div>
            </div>
          </div>
          <div class="bg5">
            <div class="d-flex justify-between">
              <div class="no-pad f-sm">Total Charge</div>
              <div class="no-pad f-ll f-semibold d-flex align-center">{{stock.total_charge}}</div>
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
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 20px -5px #999;
  margin: 0 10px;
}
.stock_item:hover {
  box-shadow: 0 0 20px 0 #999;
}
.justify-between {
  justify-content: space-between;
}
.stock_item {
  background: #fff;
  margin: 10px;
  box-shadow: 0 0 20px -5px #999;
  border-radius: 10px;
  min-width: 32%;
  overflow: hidden;
}
.stock_item div:not(.no-pad) {
  padding: 8px 16px;
}
.individual_item {
  padding-right: 15px;
}
.fullflex {
  flex: 1;
}
.bg1 {
  background-color: #4a61e3;
  color: #fff;
}
.bg2 {
  background-color: #fff;
}
.bg5 {
  background-color: #7afae3;
}
.bg4 {
  background: #6fde94;
}
.master_port_wrap {
  text-align: center;
  text-transform: uppercase;
}
.align-center {
  align-items: center;
}
i {
  padding-right: 5px;
}
.text-uppercase {
  text-transform: uppercase;
}
.pad20 {
  padding: 20px 0 10px 20px;
  margin: 0;
}
.pTop5 {
  padding-top: 5px;
}
</style>