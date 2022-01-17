<template>
  <div class="content-right">
    <div class="user-talk-search">
      <div slot="title" class="sidebar-item-title">
        <div class="user-img">
          <img src="/static/image/u26.png" />
        </div>
        <div class="user-name">
          <div class="user-name-top">
            <div>李经理</div>
          </div>
          <div class="user-name-note">深圳市腾讯计算机系统有限公司</div>
        </div>
        <div class="search-form">
          <div class="search-form-item">
            <el-input placeholder="搜索消息" size="mini" prefix-icon="el-icon-search" v-model="input" @change="inputUser" />
          </div>
          <div class="search-form-item">
            <el-date-picker v-model="value1" type="date" size="mini" placeholder="开始日期" format="yyyy 年 MM 月 dd 日" value-format="timestamp"></el-date-picker>
          </div>
          <div class="search-form-item">
            <el-date-picker v-model="value2" type="date" size="mini" placeholder="结束日期" format="yyyy 年 MM 月 dd 日" value-format="timestamp"></el-date-picker>
          </div>
        </div>
      </div>
    </div>
    <div class="user-talk-list">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="sidebar-item-title" style="margin: 10px 0;" v-for="item in list" :key="item" @click="selectUser(item)">
          <div class="left" v-if="item % 2 != 0">
            <div class="user-img">
              <img src="/static/image/u26.png" />
            </div>
            <div class="user-name">
              <div class="user-name-notes">深圳市腾讯计算机系统有限公司</div>
            </div>
          </div>
          <div class="right" v-else>
            <div class="user-name">
              <div class="user-name-notes">深圳市腾讯计算机系统有限公司</div>
            </div>
            <div class="user-img">
              <img src="/static/image/u28.png" />
            </div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
  import {
    List,
    Sidebar,
    SidebarItem
  } from 'vant';
  export default {
    name: 'TalkContent',
    components: {
      vanList: List,
      vanSidebar: Sidebar,
      vanSidebarItem: SidebarItem,
    },
    props:{
      talkId: {
        type: Number,
        default: 0
      }
    },
    watch:{
      //监听到talkId变化时，触发相应函数
      talkId(newValue,oldValue){
        this.loading = true;
        this.finished = false;
        this.list = [];
        this.activeKey = 0;
        this.onLoad();
      },
    },
    data() {
      return {
        activeName: 'customer',
        input: '',
        list: [],
        loading: false,
        finished: false,
        listHeight: 0,
        activeKey: 0,
        value1: '',
        value2:'',
      }
    },
    mounted() {
      this.listHeight = localStorage.getItem('contentHeight') - 131;
      this.$emit('selectTalk',1);
    },
    methods: {
      //加载会话列表数据
      onLoad() {
        const that = this;
        console.log('接收父组件传递数据',that.talkId);
        let data = {
          type: that.activeName,
          user_name: that.input,
          user_id:that.talkId
        };
        console.log('data', data);
        // 异步更新数据
        // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            that.list.push(that.list.length + 1);
          }
          // 加载状态结束
          that.loading = false;
          // 数据全部加载完成
          if (that.list.length >= 40) {
            that.finished = true;
          }
        }, 1000);
      },
      //选择tab
      selectTab(tab, event) {
        const that = this;
        let data = {
          type: tab.name,
          user_name: that.input,
          user_id:that.talkId
        };
        console.log('data', data);
        that.loading = true;
        that.finished = false;
        that.list = [];
        that.onLoad();
      },
      //监听输入用户名,仅在输入框失去焦点或用户按下回车时触发
      inputUser(e) {
        console.log('input this data', e);
        const that = this;
        let data = {
          type: that.activeName,
          user_name: e,
          user_id:that.talkId
        }
        console.log('data', data);
        that.loading = true;
        that.finished = false;
        that.list = [];
        that.onLoad();
      },
      //选择用户
      selectUser(e) {
        console.log('select this user', e);
        const that = this;
        that.$emit('selectTalk',e);
      },
    }
  }
</script>

<style scoped>
  .content-right {
    margin-right: 10px;
  }

  .content-right {
    flex: 1;
  }
  .user-talk-search{
    padding: 10px;
    background: #fff;
  }
  .user-talk-search .search-title {
    text-align: left;
    padding: 16px 25px 0;
    font-size: 16px;
    font-weight: bold;
  }

  .user-talk-search .search-form {
    display: flex;
    align-items: center;
  }
  .search-form-item{
    margin: 0 2px;
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 170px !important;
  }
  .user-talk-list {
    overflow-y: scroll;
    height: 480px;
    background: #fff;
    margin-top: 5px;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
  }

  .user-talk-list::-webkit-scrollbar {
    width: 0 !important
  }

  .van-sidebar {
    width: 100%;
    text-align: left;
  }

  .van-sidebar-item {
    background-color: #fff !important;
    padding: 12px !important;
  }

  .van-sidebar-item--select,
  .van-sidebar-item--select:active {
    background-color: #f7f8fa !important;
  }

  .van-sidebar-item--select::before {
    height: 100%;
    background-color: #1A73E8;
  }

  .sidebar-item-title {
    display: flex;
    align-items: center;
  }

  .sidebar-item-title .user-img {
    width: 40px;
    height: 40px;
    margin: 0 10px;
  }

  .sidebar-item-title .user-name {
    font-size: 14px;
  }
  .left{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .right{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .user-img img {
    width: 100%;
    height: 100%;
  }

  .user-name {
    text-align: left;
  }

  .user-name .user-name-top {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 3px;
    width: 200px;
  }
  .user-name .user-name-note {
    font-size: 12px;
    color: #a9a9a9;
  }
  .user-name-notes{
    background-color: #EBEDF0;
    padding: 5px 10px;
    border-radius: 3px;
    font-size: 13px;
  }
</style>
