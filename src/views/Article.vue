<template>
  <el-input
    v-model="textarea"
    :rows="2"
    type="textarea"
    placeholder="Please input"
  />
  <el-button type="primary" @click="check">查询</el-button>
  <el-button type="primary" @click="submit">上传</el-button>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { get_article, upload_article } from "@/network/article/article";
import { getNowDate } from "@/util/getTime";
const textarea = ref("");
function submit(): void {
  upload_article({
    article_title: "test1",
    article_content: textarea.value,
    article_time: getNowDate(),
    article_views: 1,
  });
}
function check(): void {
  get_article();
}
</script>
