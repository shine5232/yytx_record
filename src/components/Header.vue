<template>
  <div class="header">
    <div class="header-left">宇音天下会话内容存档系统</div>
    <div class="header-right"
      <el-dropdown @command="handleSelect">
        <span class="el-dropdown-link">
          我的工作台<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="user">用户</el-dropdown-item>
          <el-dropdown-item command="role">权限</el-dropdown-item>
          <el-dropdown-item command="loginOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
    handleSelect(key) {
      const that = this;
      if(key == 'loginOut'){
        localStorage.removeItem('token');
        that.$message.success('退出成功');
        that.$router.push({path:'login'})
      }
      if(key == 'user'){
        that.$router.push({path:'user'})
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
    padding: 20px;
    background: #fff;
  }
  .header-left{
    font-size: 20px;
    color: #1A73E8;
    font-weight: bold;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
