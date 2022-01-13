<template>
  <div class="login-body">
    <div class="login">
      <div class="login-title">系统登录</div>
      <div class="login-form">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="账号" prop="name">
            <el-input v-model.number="ruleForm.name" autocomplete="off" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="buton" type="primary" size="medium" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import {getLoginApi} from '@/api/index'
  export default {
    name: 'Login',
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        callback();
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('请输入密码'));
        }
        callback();
      };
      return {
        ruleForm: {
          pass: '',
          name: ''
        },
        rules: {
          pass: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          name: [{
            validator: checkName,
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      submitForm(formName) {
        const that = this;
        that.$refs[formName].validate((valid) => {
          if (valid) {
            getLoginApi(that.ruleForm).then((e,j)=>{
              that.$message.success('恭喜你，登陆成功~');
              localStorage.setItem('token',e.data.data.token);
              that.$router.push({path:'home'})
            }).catch((e)=>{
              that.$message.error(e.data.msg);
            });
          } else {
            return false;
          }
        });
      },
    }
  }
</script>

<style scoped>
  .login-body {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 40%;
    top: 20%;
  }

  .login {
    height: 240px;
    border-radius: 5px;
    box-shadow: 0 0 25px #c5c5c5;
    padding: 20px;
    background: #fff
  }

  .login-title {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 2px;
    padding: 5px 0;
  }

  .login-form{
    padding: 20px 0;
    margin-left: -60px;
  }

  .buton{
    width: 100%;
  }
</style>
