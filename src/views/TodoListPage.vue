<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
const api = 'https://todolist-api.hexschool.io'
const token = document.cookie.replace(
  /(?:(?:^|.*;\s*)customTodoToken\s*\=\s*([^;]*).*$)|^.*$/,
  '$1'
)
const todo = ref([{}])
const todoList = ref([{}])
const all = ref('')
const wait = ref('')
const complete = ref('')
const todoItem = ref('')
const nickname = ref('')
const unCompleteNumber = ref(0)
onMounted(async () => {
  try {
    const res = await axios.get(`${api}/users/checkout`, { headers: { Authorization: token } })
    if (res.data.status == true) {
      nickname.value = res.data.nickname
    }
    initTodo()
  } catch (error) {
    window.alert('驗證錯誤，請重新登入')
    window.location.assign('/#')
  }

  //user.value = res.data
})
const initTodo = async () => {
  try {
    const res = await axios.get(`${api}/todos/`, { headers: { Authorization: token } })
    todoList.value = res.data.data
    unCompleteNumber.value = 0
    todoList.value.forEach(function (item) {
      if (item.status == false) {
        unCompleteNumber.value = unCompleteNumber.value + 1
      }
    })
    allList()
  } catch (error) {
    window.alert(error.response.data.message)
  }
}

const allList = () => {
  todo.value = todoList.value
  all.value = 'active'
  wait.value = ''
  complete.value = ''
}
const waitList = () => {
  todo.value = todoList.value.filter(function (item) {
    return item.status == false
  })
  all.value = ''
  wait.value = 'active'
  complete.value = ''
}
const completeList = () => {
  todo.value = todoList.value.filter(function (item) {
    return item.status == true
  })
  all.value = ''
  wait.value = ''
  complete.value = 'active'
}

const deleteItem = async (id) => {
  try {
    const res = await axios.delete(`${api}/todos/${id}`, { headers: { Authorization: token } })
    initTodo()
  } catch (error) {
    window.alert(error.response.data.message)
  }
}
const addItem = async () => {
  try {
    const res = await axios.post(
      `${api}/todos/`,
      { content: todoItem.value },
      { headers: { Authorization: token } }
    )
    todoItem.value = ''
    initTodo()
  } catch (error) {
    window.alert(error.response.data.message)
  }
}
const updateItem = async (id) => {
  try {
    const res = await axios.patch(
      `${api}/todos/${id}/toggle`,
      { id: id },
      {
        headers: { Authorization: token }
      }
    )
    initTodo()
  } catch (error) {
    window.alert(error.response.data.message)
  }
}
const logOut = async () => {
  try {
    const res = await axios.post(
      `${api}/users/sign_out`,
      {},
      {
        headers: { Authorization: token }
      }
    )
    document.cookie = `customTodoToken=${res.data.token}; expires=Fri, 31 Dec 1970 23:59:59 GMT; path=/`
    window.alert('登出成功，將跳轉回登入畫面')
    window.location.assign('/#')
  } catch (error) {
    window.alert(error.response.data.message)
  }
}
</script>

<template>
  <div id="todoListPage" class="bg-half">
    <nav>
      <h1><a href=/#/">ONLINE TODO LIST</a></h1>
      <ul>
        <li class="todo_sm">
          <a href="#/todoListPage"
            ><span>{{ nickname }}的代辦</span></a
          >
        </li>
        <li><a href="/#/" @click.prevent="logOut">登出</a></li>
      </ul>
    </nav>
    <div class="conatiner todoListPage vhContainer">
      <div class="todoList_Content">
        <div class="inputBox">
          <input type="text" placeholder="請輸入待辦事項" v-model="todoItem" />
          <a href="/#/" @click.prevent="addItem">
            <i class="fa fa-plus"></i>
          </a>
        </div>
        <div class="todoList_list">
          <ul class="todoList_tab">
            <li><a href="/#/" :class="all" @click.prevent="allList">全部</a></li>
            <li><a href="/#/" :class="wait" @click.prevent="waitList">待完成</a></li>
            <li><a href="/#/" :class="complete" @click.prevent="completeList">已完成</a></li>
          </ul>
          <div class="todoList_items">
            <ul class="todoList_item" v-for="(item, key) in todo" :key="item.id">
              <li>
                <label class="todoList_label">
                  <input
                    class="todoList_input"
                    type="checkbox"
                    value="true"
                    :checked="item.status"
                    @click="updateItem(item.id)"
                  />
                  <span>{{ item.content }}</span>
                </label>
                <a href="/#/" @click.prevent="deleteItem(item.id)"> <i class="fa fa-times"></i> </a>
              </li>
            </ul>
            <div class="todoList_statistics" v-if="todo.length != 0">
              <p>{{ unCompleteNumber }} 個待完成項目</p>
            </div>
            <div class="todoList_statistics" v-else>
              <p>目前尚無待辦事項</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
