import Vue from "vue";
import Vuex from "vuex";
import fruits from "./fruits";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: JSON.parse(localStorage.getItem("myShoppingCart")) || [],
    historyData: JSON.parse(localStorage.getItem("myHistoryData")) || [],
  },
  mutations: {
    addData(state, shoppingCart) {
      state.data = shoppingCart;
      localStorage.setItem("myShoppingCart", JSON.stringify(state.data));
    },
    deleteData(state, index) {
      state.data.splice(index, 1);
      localStorage.setItem("myShoppingCart", JSON.stringify(state.data));
    },
    addHistory(state, historyData) {
      state.historyData.push(historyData);
      localStorage.setItem("myHistoryData", JSON.stringify(state.historyData));
    },
    deleteShopping(state) {
      state.data = [];
      localStorage.setItem("myShoppingCart", JSON.stringify(state.data));
    },
  },
  actions: {
    addData({ commit }, shoppingCart) {
      commit("addData", shoppingCart);
    },
    deleteData({ commit }, index) {
      commit("deleteData", index);
    },
    addHistory({ commit }, historyData) {
      commit("addHistory", historyData);
    },
    deleteShopping({ commit }) {
      commit("deleteShopping");
    },
  },
  getters: {
    getData(state) {
      return state.data;
    },
  },
  modules: {
    fruits,
  },
});
