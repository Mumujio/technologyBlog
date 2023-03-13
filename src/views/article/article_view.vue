<template>
  <div class="article_view">
    <div
      style="width: 40%; margin: 0 auto; height: 10vh; line-height: 10vh"
      v-if="isEdit"
    >
      <el-input v-model="article_data.article_title"></el-input>
    </div>
    <div class="title" v-else>{{ article_data.article_title }}</div>

    <div class="editor-box">
      <div class="use_button" v-if="instance.$login()">
        <el-button type="success" @click="save_article">保存</el-button>
        <el-button type="primary" @click="edit_article" v-if="!isEdit"
          >编辑</el-button
        >
        <el-button type="primary" @click="edit_article" v-else
          >退出编辑</el-button
        ><el-button type="danger" @click="delete_articleFn">删除</el-button>
      </div>
      <v-md-editor
        v-model="article_data.article_content"
        :autofocus="true"
        width="100%"
        ref="editor"
        :mode="editor_config.mode"
        @save="vmd_save"
        :include-level="[2, 3, 4]"
        :default-show-toc="true"
      ></v-md-editor>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive, getCurrentInstance } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  get_article,
  modify_article,
  delete_article,
} from "@/network/article/article";
import { getNowDate } from "@/util/getTime";
import { ElMessage } from "element-plus";

interface Article_data {
  article_content?: string;
  article_id?: number;
  article_img?: string;
  article_time?: string;
  article_title?: string;
  article_views?: number;
}
interface editor_config {
  mode: string;
}

const route = useRoute();
const router = useRouter();
const { proxy: instance }: any = getCurrentInstance();

let article_data: Article_data = reactive({});
const editor_config: editor_config = reactive({ mode: "preview" });
let isEdit = ref(false);
onMounted(() => {
  // 查询文章
  get_article().then((res) => {
    res.data.forEach((article: Article_data) => {
      if (article.article_id == Number(route.params.id)) {
        Object.assign(article_data, article);
      }
    });
  });
});

function edit_article() {
  isEdit.value = !isEdit.value;
  editor_config.mode = isEdit.value ? "editable" : "preview";
  if (!isEdit.value) {
    save_article();
  }
}

function delete_articleFn() {
  delete_article({ id: Number(route.params.id) }).then((res) => {
    if (res.status == 0) {
      // 修改成功
      ElMessage({
        type: "success",
        message: `${res.message}`,
      });
      router.push("/home/article");
    } else {
      // 修改失败
      ElMessage({
        type: "error",
        message: `${res.message}`,
      });
    }
  });
}

function save_article() {
  // 修改文章
  modify_article({
    article_title: article_data.article_title || "",
    article_content: article_data.article_content || "",
    article_time: getNowDate(),
    article_views: article_data.article_views || 1,
    article_img: article_data.article_img || "",
    article_id: Number(route.params.id),
  }).then((res: { status: number; message: string }) => {
    if (res.status == 0) {
      // 修改成功
      ElMessage({
        type: "success",
        message: `${res.message}`,
      });

      editor_config.mode = "preview";
      isEdit.value = false;
    } else {
      // 修改失败
      ElMessage({
        type: "error",
        message: `${res.message}`,
      });
    }
  });
}
function vmd_save() {
  // 修改文章
  modify_article({
    article_title: article_data.article_title || "",
    article_content: article_data.article_content || "",
    article_time: getNowDate(),
    article_views: article_data.article_views || 1,
    article_img: article_data.article_img || "",
    article_id: Number(route.params.id),
  }).then((res: { status: number; message: string }) => {
    if (res.status == 0) {
      // 修改成功
      ElMessage({
        type: "success",
        message: `${res.message}`,
      });

      // editor_config.mode = "preview";
      // isEdit.value = false;
    } else {
      // 修改失败
      ElMessage({
        type: "error",
        message: `${res.message}`,
      });
    }
  });
}
</script>

<style lang="less" scoped>
.article_view {
  min-height: 94vh;
  background-color: rgb(247, 237, 204);
  .title {
    color: #3a3b36;
    font-size: 32px;
    font-weight: 800;
    height: 10vh;
    text-align: center;
    line-height: 10vh;
  }

  .use_button {
    margin: 20px 0;
  }
  .editor-box {
    width: 80%;
    margin: 0 auto;
  }
}
.v-md-editor {
  background-color: rgb(247, 237, 204);
  min-height: 60vh;
}
</style>
