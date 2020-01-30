<template>
  <div id="app">
    <img alt="Vue logo" src="../../assets/logo.png">
    <div> is login page </div>
    <!-- <router-link to="/" tag="li">go home page</router-link> -->
    <div @click="_login">登录</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  methods: {
    _login() {
      axios.post('/auth/user', {
        userName: '1',
        password: '123456',
      }).then(res => {
        const { data } = res || {}
        const { success, msg } = data || {}
        if(success) {
          return this.$router.push('/')
        }
        return alert(msg)
      })
    }
  }

}
</script>