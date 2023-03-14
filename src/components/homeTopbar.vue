<template>
  <div class="homeTopbar">
    <div class="homeTopbar-fiexd">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-class"
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
        <el-menu-item index="/home/article">文章</el-menu-item>
        <el-menu-item index="/home/portfolios">作品集</el-menu-item>
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
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
let activeIndex = ref("");

function handleSelect() {}
</script>

<style lang="less" scoped>
.homeTopbar {
  height: 6vh;
  z-index: 9999;
  .homeTopbar-fiexd {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
  }
  .el-menu-class {
    background-color: rgb(255, 251, 232);
    height: 6vh;
    border: 0;
  }
}
.flex-grow {
  flex-grow: 1;
}
</style>
