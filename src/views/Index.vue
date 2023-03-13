<template>
  <home-topbar></home-topbar>
  <div class="Index">
    <div class="Index-content"></div>
  </div>
</template>
<script setup lang="ts">
import HomeTopbar from "@/components/homeTopbar.vue";

/* 测试 */
</script>
<style lang="less" scoped>
.Index {
  height: 100vh;
  background-color: rgb(255, 251, 232);
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  .Index-content {
    height: 50%;
    width: 50%;
    background-color: aqua;
  }
}
</style>
