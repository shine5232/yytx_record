<template>
  <div class="hello">
    <Header />
    <div class="content" v-bind:style="{height:contentHeight+'px'}">
      <el-container>
        <el-aside width="200px">
          <div>
            <el-menu :default-active="defaultActive" router class="el-menu-vertical-demo" @select="handleOpen">
              <template v-for="route in $router.options.routes" v-if="route.children && route.children.length">
                <template v-for="item in route.children">
                  <el-menu-item :key="route.path + '/' + item.path" :index="item.path">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{ item.name }}</span>
                  </el-menu-item>
                </template>
              </template>
            </el-menu>
          </div>
        </el-aside>
        <el-container>
          <el-header class="app-header">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item>首页</el-breadcrumb-item>
              <el-breadcrumb-item v-if="title">{{title}}</el-breadcrumb-item>
            </el-breadcrumb>
          </el-header>
          <el-main class="app-body">
            <template>
              <router-view />
            </template>
          </el-main>
        </el-container>
      </el-container>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from "../components/Header.vue"
  import Footer from "../components/Footer.vue"

  export default {
    name: 'Home',
    components: {
      Header,
      Footer
    },
    data() {
      return {
        contentHeight: 0,
        userId: 0,
        talkId: 0,
        defaultActive:'',
        title:'',
      }
    },
    mounted() {
      this.contentHeight = localStorage.getItem('contentHeight');
    },
    methods: {
      handleOpen(key, keyPath) {
        const that = this;
        switch(key){
          case 'talk':
            that.title = '会话管理';
          break;
          case 'user':
            that.title = '用户管理';
          break;
          case 'role':
            that.title = '权限管理';
          break;
          default:
            that.title = '';
        };
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    }
  }
</script>

<style scoped>
  .content{
    margin: 3px 0;
  }
  .app-header {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  .app-body{
    padding: 0;
  }
  .app-header,
  .contents {
    background: #fff;
  }
</style>
