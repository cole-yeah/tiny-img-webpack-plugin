<template>
  <div class="wrapper">
    <div>
      left content
    </div>
    <div>
      right content
    </div>
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

<style scoped>
  .wrapper {
    padding: 10px;
    background-color: #f8f8f8;
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: auto;
  }
</style>
