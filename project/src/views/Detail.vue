<template>
    <div>
        我是详情页
        <!-- {{$route.params.id}}
        {{$route.params.name}} -->


        
         {{$route.query.id}}
        {{$route.query.name}}


        <!-- {{$route.params.id}}
        {{$route.params.name}}
         -->
    </div>
</template>

<script>
    export default {
    //     beforeRouteEnter(to,from,next)
    //     {
    //         console.log(to,from,next);
    //         next(false);
    // }
    }
</script>

<style lang="scss" scoped>

</style>