<template>
  <div id="app">
        <common-header></common-header>
          <common-footer></common-footer>
  </div>
</template>

<script>
  //1，import引入 2 components中声明
    import CommonHeader from './commponents/CommonHeader';
    import CommonFooter from './commponents/CommonFooter';
    export default {
        components:{
          CommonHeader,
          CommonFooter
        }
    }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
