<template>
    <div>
        <!-- $store.commit('')来触发mutations中的方法 -->
        <button @click="$store.commit('add',5)">count add</button>
        <button @click="reduce()">count --</button>
         <button @click="addAction">触发addAction</button>
        <div>
            count:{{$store.state.count}}
        </div>

        <div>
            num:{{$store.state.num}}

        </div>
        <div>
           通过mapState映射出来的count值:{{count}}

        </div>
        <div>
            count*2+num={{xx}}:
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    export default {
        computed:{
            ...mapState(["count","num"]),
            ...mapGetters(["xx"])
        },
        methods:{
            ...mapMutations(["add","reduce"]),
            ...mapActions(['addAction'])
        }
    }
</script>

<style lang="scss" scoped>

</style>