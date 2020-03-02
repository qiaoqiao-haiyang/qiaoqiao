import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //用来存贮状态
    count:1,
    num:20
  },
  mutations: {
    //用来修改状态
    add(state,x){
      state.count+=x;
    },
    reduce(state){
      state.count--;
    }
  },
  getters:{
    xx:function(state){
      return state.count*2 + state.num;
    }
  },
  actions: {
    addAction({commit}){
      // 异步操作。。。。
      // 调用mutations
      setTimeout(function(){
        commit('add',10);//通过commit触发mutations中的add方法
      },1000);
      // conso
    }
  },
  modules: {
  }
})
