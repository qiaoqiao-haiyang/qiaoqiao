<template>
    <footer :style="{background:$store.state.color}"> 
        <router-link v-for="(obj,index) in menu" 
        :key="index" 
        :to="obj.path"
        @click.native="$store.commit('change',{color:obj.color,title:obj.title})"
        >{{obj.title}}</router-link>
       
    </footer>
</template>

<script>
    export default {
        data(){
            return{
                menu:[
                        {
                            title:"电影",
                            path:"/movie",
                            color:'red'
                        },{
                            title:"音乐",
                            path:"/music",
                            color:'yellow'
                        },{
                            title:"图书",
                            path:"/book",
                            color:'blue'
                        },{
                            title:"图片",
                            path:"/photo",
                            color:'pink'
                        }
                ]
            }
        },
        created(){
            this.menu.forEach((obj,index)=>{
                if(this.$route.path.includes(obj.path) ){
                    //判断路径和menu中那个是匹配的，修改dolor title
                    this.$store.commit('change',obj);
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    footer{
            height: 1rem;
            background: red;
            line-height: 1rem;
            position: fixed;
            bottom:0px;
            width:100%;
            display: flex;
            a{
                flex:1;
                text-align: center;
                color: #000;
                cursor: pointer;
            }
            .router-link-exact-active{
                color:#fff;
                text-decoration:none; 
            }
    }
</style>