<template>
  <div class="homeTopbar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      router
    >
      <el-menu-item index="0" style="pointer-events: none"
        >MuMu Jio</el-menu-item
      >
      <div class="flex-grow" />
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/article">文章</el-menu-item>
      <el-menu-item index="3">作品集</el-menu-item>
      <el-menu-item index="4">ChatGPT</el-menu-item>
      <!-- <el-sub-menu index="4">
        <template #title>Workspace</template>
        <el-menu-item index="4-1">item one</el-menu-item>
        <el-menu-item index="4-2">item two</el-menu-item>
        <el-menu-item index="4-3">item three</el-menu-item>
        <el-sub-menu index="4-4">
          <template #title>item four</template>
          <el-menu-item index="4-4-1">item one</el-menu-item>
          <el-menu-item index="4-4-2">item two</el-menu-item>
          <el-menu-item index="4-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu> -->
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
let activeIndex = ref("");

function handleSelect() {}
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
