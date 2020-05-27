<template>
  <div @click="jumpToSearch">
    main page
  </div>
</template>

<script>

export default {
  name: 'Main',
  methods: {
    jumpToSearch() {
      this.$router.push({path: '/search'})
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
