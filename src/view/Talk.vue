<template>
  <div class="content" v-bind:style="{height:listHeight+'px'}">
    <SearchUser @selectUser="selectUser"/>
    <SearchUserTalk :userId="userId" @selectTalk="selectTalk"/>
    <TalkContent :talkId="talkId" />
  </div>
</template>

<script>
  import SearchUser from "../components/SearchUser.vue"
  import SearchUserTalk from "../components/SearchUserTalk.vue"
  import TalkContent from "../components/TalkContent.vue"
  export default {
    name: 'Talk',
    components: {
      SearchUser,
      SearchUserTalk,
      TalkContent
    },
    data() {
      return {
        contentHeight: 0,
        userId: 0,
        talkId: 0,
        listHeight:0,
      }
    },
    mounted() {
      this.listHeight = localStorage.getItem('contentHeight') - 67;
    },
    methods: {
      //选择用户列表
      selectUser(e) {
        const that = this;
        console.log('接收用户列表组件传递的数据', e);
        that.userId = e;
        that.talkId = e;
      },
      //选择会话
      selectTalk(e) {
        const that = this;
        console.log('接收会话列表组件传递的数据', e);
        that.talkId = e;
      },
    }
  }
</script>

<style scoped>
  .content {
    display: flex;
    width: 100%;
    overflow: hidden;
    margin: 5px 0;
  }
</style>
