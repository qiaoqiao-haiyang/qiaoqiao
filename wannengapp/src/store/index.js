import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color:"",
    title:""
  },
  mutations: {
    change(state,{color,title}){
      state.color = color;
      state.title = title;
    }
  },
  actions: {
  },
  modules: {
  }
})
