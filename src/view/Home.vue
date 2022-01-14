<template>
  <div class="hello">
    <Header />
    <div class="content" v-bind:style="{height:contentHeight+'px'}">
      <SearchUser />
      <SearchUserTalk />
      <div class="content-right">未开发...</div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from "../components/Header.vue"
  import Footer from "../components/Footer.vue"
  import SearchUser from "../components/SearchUser.vue"
  import SearchUserTalk from "../components/SearchUserTalk.vue"

  export default {
    name: 'Home',
    components: {
      Header,
      Footer,
      SearchUser,
      SearchUserTalk
    },
    data() {
      return {
        contentHeight: 0,
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

  .content-right{
    background: #fff;
    margin-right: 10px;
  }

  .content-right {
    flex: 1;
  }
</style>
