<template>
  <div class="hello">
    <h2>home page</h2>
    <p>
      账号：<input/>
    </p>
    <p>
      密码：<input/>
    </p>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
