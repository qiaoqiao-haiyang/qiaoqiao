import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Detail from './../views/Detail.vue';
import Test from './../views/Test.vue';
import A from './../views/A.vue';
import Error from './../views/Error.vue';
import Test1 from './../views/Test1.vue'


Vue.use(VueRouter);

const routes = [
  {
    path:"/home",
    component:Home,
    children:[
      {
        path:'a',
        component:A
      }
    ]
  },{
    path:"/detail",
    name:"detail",
    component:Detail,
    
  },{
    path:"/test",
    component:Test,
    alias:'/abc'
  },{
    path:"/",
    redirect:'/home',
  },{
    path:'*',
    component:Error
  },{
    path:"/test1",
    component:Test1,
  }
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
