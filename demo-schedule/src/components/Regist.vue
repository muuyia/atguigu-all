<script setup>
  import {ref,reactive} from 'vue'
  import request from '../utils/request'

  let registUser = reactive({
    username:"",
    userPwd:""
  })
  let usernameMsg=ref('')
  let userPwdMsg=ref('')
  let reUserPwdMsg=ref('')
  let reUserPwd=ref('')


  async function checkUsername(){
        var usernameReg=/^[a-zA-Z0-9]{5,10}$/
        if(!usernameReg.test(registUser.username)){
          usernameMsg.value="格式有误"
          return false
        }
        //继续校验用户名是否被占用
        let response = await request.post(`http://localhost:8080/user/checkUsernameUsed?username=${registUser.username}`)
        console.log(response)
        usernameMsg.value="ok"
            return true
  }

    function checkUserPwd(){
      let userPwdReg = /^[0-9]{6}$/

      if(!userPwdReg.test(registUser.userPwd)){
        userPwdMsg.value="格式有误"
        return false
      }
      userPwdMsg.value="OK"
      return true
    }

    function checkReUserPwd(){
      let userPwdReg = /^[0-9]{6}$/

      if(!userPwdReg.test(reUserPwd.value)){
        userPwdMsg.value="格式有误"
        return false
      }
      if(registUser.userPwd != reUserPwd.value ){
        reUserPwdMsg.value="两次密码不一致"
        return false
      }

      reUserPwdMsg.value="OK"
      return true
    }
</script>

<template>
  <div>
      <h3 class="ht">请注册</h3>
      <table class="tab" cellspacing="0px">
        <tr class="ltr">
          <td>请输入账号</td>
          <td>
            <input class="ipt"
              id="usernaemInput"
              type="text"
              name="username"
              v-model="registUser.username"
              @blur="checkUsername()">
            <span idd="usernameMsg" class="msg" v-text="usernameMsg"></span>
          </td>
        </tr>
        <tr class="ltr">
          <td>请输入密码</td>
          <td>
            <input class="ipt"
              id="userPwdInput"
              type="password"
              name="userPwd"
              v-model="registUser.userPwd"
              @blur="checkUserPwd()">
              <span id="userPwdMsg" class="msg" v-text="userPwdMsg"></span>
          </td>
        </tr>
        <tr class="ltr">
          <td>确认密码</td>
          <td>
            <input class="ipt"
              id="reUserPwdInput"
              type="password"
              v-model="reUserPwd"
              @blur="checkReUserPwd()">
            <span id="reUserPwdMsg" class="msg" v-text="reUserPwdMsg"></span>

          </td>
        </tr>
        <tr class="ltr">
          <td colspan="2" class="buttonContainer">
            <input class="btn1" type="button" value="注册">
            <input class="btn1" type="button" value="重置">
            <router-link to="/login">
              <button class="btn1">去登录</button>
            </router-link>
          </td>
        </tr>
      </table>
  </div>

</template>

<style scoped>
    .ht{
      text-align:center;
      color:cadetblue;
      font-family: 幼圆;
    }
  .tab{
    width:500px;
      border : 5px solid cadetblue;
      margin:0px auto;
      border-radius:5px;
      font-family:幼圆；
  }
  .ltr td{
    border: 1px solid powderblue;

  }
  .ipt{
    border: 0px;

    width: 50%;
  }
  .btn1{
    border:2px soolid powderblue;
    border-radius: 4px;
    width: 60px;
    background-color: antiquewhite;
  }
  .msg{
    color:gold;
  }
  .buttonContainer{
    text-align:center;
  }
</style>
