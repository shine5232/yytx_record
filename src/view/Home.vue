<template>
  <div class="hello">
    <Header />
    <div class="content" v-bind:style="{height:contentHeight+'px'}">
      <SearchUser @selectUser="selectUser"/>
      <SearchUserTalk :userId="userId" @selectTalk="selectTalk"/>
      <TalkContent :talkId="talkId" />
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from "../components/Header.vue"
  import Footer from "../components/Footer.vue"
  import SearchUser from "../components/SearchUser.vue"
  import SearchUserTalk from "../components/SearchUserTalk.vue"
  import TalkContent from "../components/TalkContent.vue"

  export default {
    name: 'Home',
    components: {
      Header,
      Footer,
      SearchUser,
      SearchUserTalk,
      TalkContent
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
      //选择用户列表
      selectUser(e){
        const that = this;
        console.log('接收用户列表组件传递的数据',e);
        that.userId = e;
      },
      //选择会话
      selectTalk(e){
        const that = this;
        console.log('接收会话列表组件传递的数据',e);
        that.talkId = e;
      },
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
