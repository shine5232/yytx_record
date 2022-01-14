<template>
  <div class="content-left">
    <div class="company-user-search">
      <div class="search-title">公司员工（{{employeesNumber}}）</div>
      <div class="search-form">
        <div class="search-form-item">
          <el-select v-model="value" placeholder="请选择" size="mini" @change="selectDepartment">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <div class="search-form-item">
          <el-input placeholder="请输入姓名" size="mini" prefix-icon="el-icon-search" v-model="input" @change="inputUser" />
        </div>
      </div>
    </div>
    <div class="company-user-list" v-bind:style="{height:listHeight+'px'}">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item v-for="item in list" :key="item" @click="selectUser(item)">
            <div slot="title" class="sidebar-item-title">
              <div class="user-img">
                <img src="/static/image/u28.png" />
              </div>
              <div class="user-name">杨森</div>
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
    name: 'SearchUser',
    components: {
      vanList: List,
      vanSidebar: Sidebar,
      vanSidebarItem: SidebarItem,
    },
    data() {
      return {
        employeesNumber: 3,
        options: [{
          value: '1',
          label: '宇音天下'
        }, {
          value: '2',
          label: '商务部'
        }, {
          value: '3',
          label: '研发部'
        }, {
          value: '4',
          label: '财务部'
        }],
        value: '1',
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
    },
    methods: {
      //加载用户数据
      onLoad() {
        const that = this;
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
      //选择部门
      selectDepartment(e) {
        console.log('select this department', e);
        const that = this;
        let data = {
          department: e,
          user_name: that.input
        }
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
          department: that.value,
          user_name: e
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
      },
    }
  }
</script>

<style scoped>
  .content-left {
    background: #fff;
    margin-right: 10px;
  }

  .content-left {
    width: 250px;
  }

  .company-user-search .search-title {
    text-align: left;
    padding: 16px 25px 0;
    font-size: 16px;
    font-weight: bold;
  }

  .company-user-search .search-form {
    width: 80%;
    margin: 10px auto;
  }

  .search-form .search-form-item {
    margin-bottom: 10px;
  }

  .company-user-list {
    overflow-y: scroll;
    height: 480px;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
  }

  .company-user-list::-webkit-scrollbar {
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
    margin: 0 15px;
  }

  .sidebar-item-title .user-name {
    font-size: 14px;
  }

  .user-img img {
    width: 100%;
    height: 100%;
  }
</style>
