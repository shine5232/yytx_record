<template>
  <div class="hello">
    <Header />
    <div class="content" v-bind:style="{height:contentHeight+'px'}">
      sada
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from "../components/Header.vue"
  import Footer from "../components/Footer.vue"

  export default {
    name: 'User',
    components: {
      Header,
      Footer
    },
    data() {
      return {
        contentHeight: 0,
        userId:0,
        talkId:0,
      }
    },
    mounted() {
      this.contentHeight = localStorage.getItem('contentHeight');
    },
    methods: {
      
    }
  }
</script>

<style scoped>
  .content {
    display: flex;
    margin: 10px 0;
    width: 100%;
    overflow: hidden;
  }
</style>
