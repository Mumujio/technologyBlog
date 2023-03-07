<template>
  <div class="article_edit">
    <el-container>
      <el-header
        ><div style="padding-top: 20px; width: 300px; margin: 0 auto">
          <el-input
            placeholder="输入文章标题"
            v-model="article_title"
          ></el-input></div
      ></el-header>
      <el-main>
        <v-md-editor
          v-model="textarea"
          :autofocus="true"
          height="600px"
          width="100%"
          ref="editor"
          @save="save"
        ></v-md-editor
      ></el-main>
      <el-footer>
        <div style="display: flex; justify-content: center">
          <el-button type="info" @click="empty">清空</el-button>
          <el-button type="primary" @click="save">发表</el-button>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { get_article, upload_article } from "@/network/article/article";
import { getNowDate } from "@/util/getTime";
import { ElMessage } from "element-plus";

let textarea = ref("");
let article_title = ref("");

// 发表
function save() {
  if (article_title.value && textarea.value) {
    // 标题和内容不能为空
    upload_article({
      article_title: article_title.value,
      article_content: textarea.value,
      article_time: getNowDate(),
      article_views: 1,
    }).then((res: { status: number; message: string }) => {
      console.log(res);
      if (res.status == 0) {
        // 查询成功
        ElMessage({
          type: "success",
          message: `${res.message}`,
        });
        textarea.value = "";
        article_title.value = "";
      } else {
        // 查询失败
        ElMessage({
          type: "error",
          message: `${res.message}`,
        });
      }
    });
  } else {
    ElMessage({
      type: "error",
      message: "标题和内容不能为空",
    });
  }
}
// 清空
function empty() {
  textarea.value = "";
  article_title.value = "";
}
</script>

<style lang="less" scoped>
.article_edit {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #e6d1d1;
}
</style>
