<script setup>
import axios from 'axios'
import { ref } from 'vue'
const api = 'https://todolist-api.hexschool.io'
const user = ref({
  email: '',
  nickname: '',
  password: '',
  password2: ''
})
const checkSignUp = () => {
  if (
    user.value.email == '' ||
    user.value.nickname == '' ||
    user.value.password != user.value.password2
  ) {
    alert('資料輸入錯誤，請確認資料')
  } else {
    delete user.value.password2
    signUp()
  }
}
const signUp = async () => {
  try {
    const res = await axios.post(`${api}/users/sign_up`, user.value)
    window.alert('註冊成功')
    window.location.assign('#/')
  } catch (error) {
    console.log(error)
    window.alert(error.response.data.message)
  }
}
</script>

<template>
  <div id="signUpPage" class="bg-yellow">
    <div class="conatiner signUpPage vhContainer">
      <div class="side">
        <a href="#/"
          ><img
            class="logoImg"
            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png"
            alt=""
        /></a>
        <img
          class="d-m-n"
          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png"
          alt="workImg"
        />
      </div>
      <div>
        <form class="formControls" action="index.html">
          <h2 class="formControls_txt">註冊帳號</h2>
          <label class="formControls_label" for="email">Email</label>
          <input
            class="formControls_input"
            type="text"
            id="email"
            name="email"
            placeholder="請輸入 email"
            required
            v-model="user.email"
          />
          <label class="formControls_label" for="name">您的暱稱</label>
          <input
            class="formControls_input"
            type="text"
            name="name"
            id="name"
            placeholder="請輸入您的暱稱"
            v-model="user.nickname"
          />
          <label class="formControls_label" for="pwd">密碼</label>
          <input
            class="formControls_input"
            type="password"
            name="pwd"
            id="pwd"
            placeholder="請輸入密碼"
            required
            v-model="user.password"
          />
          <label class="formControls_label" for="pwd">再次輸入密碼</label>
          <input
            class="formControls_input"
            type="password"
            name="pwd"
            id="pwd"
            placeholder="請再次輸入密碼"
            required
            v-model="user.password2"
          />
          <input
            class="formControls_btnSubmit"
            type="button"
            value="註冊帳號"
            @click.prevent="checkSignUp"
          />
          <a class="formControls_btnLink" href="#/">登入</a>
        </form>
      </div>
    </div>
  </div>
</template>
>
