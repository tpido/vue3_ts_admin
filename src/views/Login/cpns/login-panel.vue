<template>
  <div id="LoginPanel">
    <el-tabs type="border-card" :stretch="true">
      <el-tab-pane>
        <template #label>
          <el-icon><User /></el-icon>
          账号登录
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane label="Config">
        <template #label>
          <el-icon><Iphone /></el-icon>
          手机登录
        </template>
        手机登录
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepAccount">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="el-btn" @click="handleBtnClick">
      点击登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { User, Iphone } from '@element-plus/icons';
import { ref } from 'vue';
import LoginAccount from './login-account.vue';

const isKeepAccount = ref(true);
const accountRef = ref<InstanceType<typeof LoginAccount>>();

const handleBtnClick = () => {
  accountRef.value?.loginAction(isKeepAccount.value);
};
</script>

<style lang="less" scoped>
#LoginPanel {
  width: 320px;
  margin-bottom: 150px;
  margin-top: 10px;
}

.account-control {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-btn {
  margin-top: 5px;
  width: 100%;
}
</style>
