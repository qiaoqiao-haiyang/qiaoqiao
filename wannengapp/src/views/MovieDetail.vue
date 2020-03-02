<template>
<div>
    <div v-if="showMovie">
        <div class="detail-top">
            <img :src="movie.images.medium" alt="">
        <div class="detail-info"> 
            <h2>{{movie.original_title}}</h2>
            <p>上映时间{{movie.pubdate}}</p>
            <p>时长{{movie.durations[0]}}</p>
        </div>
        </div>
        <div class="detail-bottom">{{movie.summary}}</div>
    </div>
    <img class="loading" v-if="isSHow" src="../assets/images/loading.gif" alt />
</div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                movie:{},
                isSHow:true,
                showMovie:false
            };
        },
        created(){
            console.log(this.$router,this.$route)
            axios
            .get(
                'https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/subject/'+
                this.$route.query.id
                )
            .then((res)=>{
                this.movie=res.data;
                this.isSHow = false;
                this.showMovie = true;
            })
            .catch((res)=>{
                console.log(res)
            });
        }
    };
</script>

<style lang="scss" scoped>
.detail-top{
    display: flex;
    img{
        width: 3rem;
    }
    .detail-info{
        flex:1;
    }
}
.loading {
    position:fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width: 1rem;
}
</style>