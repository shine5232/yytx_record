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
      clientHeight:0,
      contentHeight:0,
    }
  },
  mounted(){
    this.clientHeight = parseInt(`${document.documentElement.clientHeight}`);
    this.contentHeight = this.clientHeight - 120;
    localStorage.setItem('clientHeight',this.clientHeight);
    localStorage.setItem('contentHeight',this.contentHeight);
    window.onresize = function temp(){
      this.clientHeight = parseInt(`${document.documentElement.clientHeight}`);
      this.contentHeight = this.clientHeight - 120;
      localStorage.setItem('clientHeight',this.clientHeight);
      localStorage.setItem('contentHeight',this.contentHeight);
    }
  },
  watch:{
    clientHeight:function(){
      this.changeFixed(this.clientHeight);
    }
  },
  methods:{
    changeFixed(clientHeight){
      this.clientHeight = parseInt(clientHeight);
      this.contentHeight = this.clientHeight - 120;
      localStorage.setItem('clientHeight',this.clientHeight);
      localStorage.setItem('contentHeight',this.contentHeight);
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
