<script setup>
import axios from 'axios'
import { ref } from 'vue'
const user = ref({
  email: '',
  password: ''
})
const api = 'https://todolist-api.hexschool.io'
const signInRes = ref('')

const checkSignIn = () => {
  if (user.value.email == '') {
    alert('請輸入email')
  } else {
    signIn()
  }
}
const signIn = async () => {
  try {
    const res = await axios.post(`${api}/users/sign_in`, user.value)
    signInRes.value = res.data.token
    // document.cookie = 'customTodoToken=${res.data.token}; expires=${new Date(res.data.exp)}; path=/'
    document.cookie = `customTodoToken=${res.data.token}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`
    window.location.assign('#/todoListPage')
  } catch (error) {
    window.alert(error.response.data.message)
  }
}
</script>
<template>
  <div id="loginPage" class="bg-yellow">
    <div class="conatiner loginPage vhContainer">
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
          <h2 class="formControls_txt">最實用的線上代辦事項服務</h2>
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
          <span v-if="user.email == ''">此欄位不可留空</span>
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
          <input class="formControls_btnSubmit" type="button" value="登入" @click="signIn" />
          <!--onclick="javascript:location.href='#todoListPage'" -->
          <a class="formControls_btnLink" href="#/signUpPage">註冊帳號</a>
        </form>
      </div>
    </div>
  </div>
</template>
