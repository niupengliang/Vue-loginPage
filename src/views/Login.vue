<template>
  <div class="login">
    <div class="container">
         <h2>Glad to see you</h2>
      <span>Login to continue using Wholesale</span>
    <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" hideRequiredMark>
     <label for="">邮箱</label>
    <a-form-model-item has-feedback prop="email"  :wrapper-col="{ span:20,offset:2}" >
      <a-input v-model="ruleForm.email" type="text"   autocomplete="off" placeholder="请输入邮箱账号" />
    </a-form-model-item>
          <label for="">密码</label><a href="">Foget your password?</a>
    <a-form-model-item has-feedback    prop="pass"  :wrapper-col="{ span:20,offset:2}">
      <a-input v-model="ruleForm.pass" type="password"  autocomplete="off" placeholder="请输入密码"/>
    </a-form-model-item>
    <a-form-model-item >
      <a-button style="width: 315px;margin-left: 34px;" type="primary" @click="submitForm('ruleForm')">
        Login
      </a-button>
    </a-form-model-item>
  </a-form-model>
  <span style="color:#5A5D5E">Having trouble logging in ? <a href="">Contact us</a></span>
  </div>
     
  </div>
</template>

<script>
import {login} from '@/api/login.js'
import { Modal } from 'ant-design-vue';
export default {
  data() {
    return {
      ruleForm: {
        pass: '',
        email: '',
      },
      rules: {
        email: [{required: true, message: '请输入邮箱', trigger: 'blur'}, {min:4, message: '邮箱长度必须大于4位', trigger: 'blur' }],
        pass:[{required: true, message: '请输入密码', trigger: 'blur'}, { min:6, message: '密码长度必须大于六位', trigger: 'blur' }]
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          await login({username:this.ruleForm.email,password:this.ruleForm.pass})
        } else {
          return false;
        }
      });
    },
  }
};
</script>

<style lang="scss" scoped>
  .login{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .container{
      width:380px;
      height:390px;
      background-color: #FFFFFF;
      box-shadow: 0px 0px 6px #8888a5;
      border-radius: 5px;
      h2{
        margin:30px 0 0 36px;
        font-weight: bold;
      }
      span{
        display: block;
        margin:0 0 15px 36px;
          color: #AAAFC3;
          font-weight: bold;
      }
      .ant-form{
        label{
          display: inline-block;
          margin:0 0 7px 36px;
          color: #AAAFC3;
          font-weight: bold;
        }
        a{
          float: right;
          margin-right: 30px;
          font-weight: bold;
        }
        .and-row{
          
          margin: 0;
          }
        }
      }
    }
  
</style>