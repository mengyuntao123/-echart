import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


const store =new Vuex.Store({
    state:{
      arr:[],
      students: [
        {id: 1, name: 'zhangsan', age: 18},
        {id: 2, name: 'lisi', age: 20},
        {id: 3, name: 'xiaohua', age: 15},
        {id: 4, name: 'jinjin', age: 22}
      ],

      count:1
    },
    mutations:{
      topic(state,payload){
          state.arr.push(...payload);
          // console.log(state.arr)
      },

      add(state,payload){
         state.count+=payload
      }
         
    },
    
    getters:{
       more20(state){
         let af=[]
         state.students.forEach((el,i)=>{
            if(el.age>20){
              af.push(el)
            }
         })
         return af
       }
    },
    
    actions: {
       addAction(context){
          context.commit("add",10)
       }   
    }
})

export default store