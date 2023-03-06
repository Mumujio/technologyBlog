<template>
  <el-input
    v-model="textarea"
    :rows="2"
    type="textarea"
    placeholder="Please input"
  />
  <el-button type="primary" @click="submit">上传</el-button>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { get_article, upload_article } from "@/network/article/article";

const textarea = ref("");
function submit(): void {
  // console.log(Date.getNowDate());
  const date = Date.now();
  upload_article({
    article_title: "test1",
    article_content: textarea.value,
    article_time: "2023-10-16 10:12:42",
    article_views: 1,
  });
}
</script>
