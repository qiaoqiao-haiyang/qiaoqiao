<template>
    <div>
        我是首页
        {{$store.state.count}}
        <router-link to="/home/a">A</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        

    }
</script>

<style lang="scss" scoped>

</style>