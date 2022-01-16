<template>
  <div class="content-center">
    <div class="user-talk-search">
      <div class="search-title">会话对象</div>
      <div class="search-form">
        <div class="search-form-item">
          <el-tabs v-model="activeName" @tab-click="selectTab">
            <el-tab-pane label="客户" name="customer" />
            <el-tab-pane label="同事" name="colleague" />
            <el-tab-pane label="群聊" name="groupchat" />
          </el-tabs>
        </div>
        <div class="search-form-item">
          <el-input placeholder="请输入姓名" size="mini" prefix-icon="el-icon-search" v-model="input" @change="inputUser" />
        </div>
      </div>
    </div>
    <div class="user-talk-list" v-bind:style="{height:listHeight+'px'}">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item v-for="item in list" :key="item" @click="selectUser(item)">
            <div slot="title" class="sidebar-item-title">
              <div class="user-img">
                <img src="/static/image/u26.png" />
              </div>
              <div class="user-name">
                <div class="user-name-top">
                  <div>李经理</div>
                  <div class="time">17:20</div>
                </div>
                <div class="user-name-note">深圳市腾讯计算机系统有限公司</div>
              </div>
            </div>
          </van-sidebar-item>
        </van-sidebar>
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
    name: 'SearchUserTalk',
    components: {
      vanList: List,
      vanSidebar: Sidebar,
      vanSidebarItem: SidebarItem,
    },
    props:{
      userId: {
        type: Number,
        default: 0
      }
    },
    watch:{
      //监听到userId变化时，触发相应函数
      userId(newValue,oldValue){
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
        console.log('接收父组件传递数据',that.userId);
        let data = {
          type: that.activeName,
          user_name: that.input,
          user_id:that.userId
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
          user_id:that.userId
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
          user_id:that.userId
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
  .content-center {
    background: #fff;
    margin-right: 10px;
  }

  .content-center {
    width: 300px;
  }

  .user-talk-search .search-title {
    text-align: left;
    padding: 16px 25px 0;
    font-size: 16px;
    font-weight: bold;
  }

  .user-talk-search .search-form {
    width: 80%;
    margin: 10px auto;
  }

  .user-talk-list {
    overflow-y: scroll;
    height: 480px;
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
  }

  .sidebar-item-title .user-img {
    width: 40px;
    height: 40px;
    margin: 0 15px;
  }

  .sidebar-item-title .user-name {
    font-size: 14px;
  }

  .user-img img {
    width: 100%;
    height: 100%;
  }

  .user-name {
    flex: 1;
  }

  .user-name .user-name-top {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 3px;
    width: 200px;
  }
  .user-name .time,
  .user-name-note {
    font-size: 12px;
    color: #a9a9a9;
  }
</style>
