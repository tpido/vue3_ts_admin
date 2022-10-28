<template>
  <div id="main">
    <el-container class="main-content">
      <el-aside width="200px">
        <nav-menu></nav-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavMenu from '@/components/nav-menu/nav-menu.vue';
</script>

<style lang="less" scoped>
#main,
.main-content {
  height: 100%;
}

.el-aside,
.el-main {
  height: 100%;
}

.el-header {
  display: flex;
  align-items: center;
}

.el-main {
  background-color: #f0f2f5;
}

.el-aside {
  background-color: #001529;
}
</style>
