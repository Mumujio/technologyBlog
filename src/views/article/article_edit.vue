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
        <el-input
          placeholder="输入文章图片名称"
          v-model="article_img"
          style="width: 80%; padding-bottom: 20px"
        ></el-input>
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
import { useRouter } from "vue-router";

let textarea = ref("");
let article_title = ref("");
let article_img = ref("");
const router = useRouter();
// 发表
function save() {
  if (article_title.value && textarea.value && article_img.value) {
    // 标题和内容不能为空
    upload_article({
      article_title: article_title.value,
      article_content: textarea.value,
      article_time: getNowDate(),
      article_views: 1,
      article_img: "http://119.23.189.220:666/photo/" + article_img.value,
    }).then((res: { status: number; message: string }) => {
      console.log(res);
      if (res.status == 0) {
        // 查询成功
        ElMessage({
          type: "success",
          message: `${res.message}`,
        });
        router.push("/home/article");
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
      message: "标题和内容图片不能为空",
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
  background-color: #e6d1d1;
  height: 94vh;
}
</style>
