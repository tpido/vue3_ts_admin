<template>
  <div id="NavFold">
    <div class="fold-icon" @click="foldHandle">
      <el-icon size="20px" v-if="isFold"><Fold /></el-icon>
      <el-icon size="20px" v-else><Expand /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Expand, Fold } from '@element-plus/icons';
import { defineEmits } from 'vue';
import { ref } from 'vue';
const emit = defineEmits(['FoldAction']);

const isFold = ref(true);

const foldHandle = () => {
  isFold.value = !isFold.value;
  emit('FoldAction', isFold);
};
</script>

<style lang="less" scoped></style>
