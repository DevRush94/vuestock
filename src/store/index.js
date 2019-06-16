import Vuex from 'vuex';
import Vue from 'vue';
import stockdata from './modules/stockdata';

//load Vuex
Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
 modules: {
  stockdata
 }
})