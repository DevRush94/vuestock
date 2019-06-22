import axios from 'axios';

const state = {
 stockdata: []
};

const getters = {
 allstockdata: state => state.stockdata
};

const actions = {
 async setstockdata({ commit }) {
  const response = await axios.get(
   'https://raw.githubusercontent.com/DevRush94/vuestock/master/src/store/modules/db.json'
   // '/db.json'
  );
  commit('setstockdata', response);
 }
};

const mutations = {
 setstockdata: (state, stockdata) => (state.stockdata = stockdata),
 newsdata: (state, sdata) => state.stockdata.unshift(sdata)
};
export default {
 state,
 getters,
 actions,
 mutations
};
