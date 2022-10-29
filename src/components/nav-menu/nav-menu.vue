<template>
  <div id="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="" />
      <span>后台管理系统</span>
    </div>

    <el-menu
      background-color="#001529"
      text-color="white"
      active-text-color="#ffd04b"
      unique-opened
      :collapse="isCollapse"
    >
      <i class="el-icon-monitor"></i>
      <template v-for="item in userMenu" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon v-if="item.id === 38">
                <Monitor></Monitor>
              </el-icon>
              <el-icon v-if="item.id === 1">
                <Setting></Setting>
              </el-icon>
              <el-icon v-if="item.id === 9">
                <Goods></Goods>
              </el-icon>
              <el-icon v-if="item.id === 41">
                <ChatLineRound></ChatLineRound>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="childItem in item.children" :key="childItem.id">
              <el-menu-item :index="childItem.id + ''">
                {{ childItem.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-if="item.type === 0">
          <el-sub-menu>
            <template #title>
              <span>{{ item.name }}</span>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { Monitor, Setting, Goods, ChatLineRound } from '@element-plus/icons';
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
import { defineProps } from 'vue';
const store = useStore();
const userMenu = computed(() => store.state.loginModule.userMenu);

const props = defineProps<{
  isCollapse: boolean;
}>();
</script>

<style lang="less" scoped>
#nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    justify-content: flex-start;
    align-items: center;

    img {
      height: 100%;
      margin-right: 21px;
    }

    span {
      white-space: nowrap;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }
}
</style>
