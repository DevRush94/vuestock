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
  );
  commit('setstockdata', response);
 }
};

const mutations = {
 setstockdata: (state, stockdata) => (state.stockdata = stockdata),
 newTodo: (state, todo) => state.stockdata.unshift(todo)
};
export default {
 state,
 getters,
 actions,
 mutations
};
