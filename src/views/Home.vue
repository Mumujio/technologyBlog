<template>
  <div>123</div>
  <button @click="test1" style="height: 40px; width: 40px">点击get</button>
  <button @click="test2" style="height: 40px; width: 40px">点击post</button>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { get_article, upload_article } from "@/network/article/article";
onMounted(() => {});
function test1() {
  get_article();
}
function test2() {
  upload_article();
}
</script>
