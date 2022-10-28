<template>
  <div id="LoginAccount">
    <el-form label-width="70px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import Cache from '@/utils/Cache';
import { ElForm } from 'element-plus';
import { reactive, defineExpose, ref } from 'vue';
import { useStore } from 'vuex';
import { rules } from '../config/rules-config';
const store = useStore();

const account = reactive({
  name: Cache.getCache('name') ?? '',
  password: Cache.getCache('password') ?? ''
});

const formRef = ref<InstanceType<typeof ElForm>>();

const loginAction = (isKeepAccount: boolean) => {
  console.log('login_account');
  formRef.value?.validate((valid) => {
    if (valid) {
      if (isKeepAccount) {
        Cache.setCache('name', account.name);
        Cache.setCache('password', account.password);
      } else {
        Cache.removeCache('name');
        Cache.removeCache('password');
      }
      store.dispatch('loginModule/loginAction', { ...account });
    }
  });
};

defineExpose({
  loginAction
});
</script>

<style lang="less" scoped></style>
