<template>
  <div id="app" v-bind:style="{height:clientHeight+'px'}">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      clientHeight:'',
    }
  },
  mounted(){
    this.clientHeight = `${document.documentElement.clientHeight}`;
    window.onresize = function temp(){
      this.clientHeight = `${document.documentElement.clientHeight}`;
    }
  },
  watch:{
    clientHeight:function(){
      this.changeFixed(this.clientHeight)
    }
  },
  methods:{
    changeFixed(clientHeight){
      this.clientHeight = clientHeight;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f2f2f2;
}
body{
  padding: 0;
  margin: 0;
}
</style>
