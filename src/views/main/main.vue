<template>
  <div id="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu :isCollapse="isCollapse"></nav-menu>
      </el-aside>
      <el-container>
        <el-header><NavFold @fold-action="collapseHandle" /> </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavFold from '@/components/nav-fold/nav-fold.vue';
import NavMenu from '@/components/nav-menu/nav-menu.vue';
import { ref } from 'vue';

const isCollapse = ref(false);

const collapseHandle = () => {
  isCollapse.value = !isCollapse.value;
};
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
  transition: width 300ms ease;
}
</style>
