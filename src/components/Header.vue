<template>
  <div class="header">
    <div class="header-left">宇音天下会话内容存档系统</div>
    <div class="header-right">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-submenu index="1">
          <template slot="title">我的工作台</template>
          <el-menu-item index="1-1" route="">用户</el-menu-item>
          <el-menu-item index="1-2" route="">权限</el-menu-item>
          <el-menu-item index="1-3" route="loginOut">退出</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      activeIndex: '1',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      const that = this;
      if(key == '1-3'){
        localStorage.removeItem('token');
        that.$message.success('退出成功');
        that.$router.push({path:'login'})
      }
    }
  },
}
</script>

<style scoped>
  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background: #fff;
  }
  .header-left{
    font-size: 20px;
    color: #1A73E8;
    font-weight: bold;
  }
  .el-menu::after{
    display: none !important;
  }
</style>
