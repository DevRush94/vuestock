import Vuex from 'vuex';
import Vue from 'vue';
import stockdata from './modules/stockdata';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
 modules: {
  stockdata
 }
});
