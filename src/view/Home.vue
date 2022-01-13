<template>
  <div class="hello">
    <Header />
    <div class="content">
      <div class="content-left">q</div>
      <div class="content-center">w</div>
      <div class="content-right">r</div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
export default {
  name: 'Home',
  components:{Header,Footer},
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .content{
    display: flex;
    align-items: center;
    margin: 5px 0;
    width: 100%;
  }
  .content-left,.content-right,.content-center{
    background: #fff;
    margin-right: 5px;
  }
  .content-left{
    width: 200px;
  }
  .content-center{
    width: 300px;
  }
  .content-right{
    flex: 1;
  }
</style>
