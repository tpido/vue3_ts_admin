<template>
  <div id="login">
    <h2 class="title">后台管理系统</h2>
    <login-panel />
  </div>
</template>

<script setup lang="ts">
import LoginPanel from './cpns/login-panel.vue';
</script>

<style lang="less" scoped>
#login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/img/login-bg.svg');
}
</style>
