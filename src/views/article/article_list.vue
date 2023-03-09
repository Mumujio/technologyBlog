<template>
  <div class="index">
    <el-container>
      <el-header style="height: auto">
        <div class="title">文章目录</div>
      </el-header>
      <el-main>
        <div class="main" v-loading="loading">
          <div>
            <div class="cardSection" v-for="article in article_data">
              <el-card
                shadow="hover"
                :body-style="{ padding: '0px' }"
                @click="go_article(article.article_id)"
              >
                <div class="card-content">
                  <div class="content-img">
                    <el-image :src="article.article_img"></el-image>
                  </div>
                  <div class="content-info">
                    <div class="content-info_box">
                      <div class="content-info-title">
                        {{ article.article_title }}
                      </div>
                      <div class="content-info-content">
                        {{ article.article_content }}
                      </div>
                      <div class="content-info-time">
                        {{ article.article_time.substring(0, 10) }}
                      </div>
                    </div>
                  </div>
                </div>
              </el-card>
            </div>
          </div>
        </div>
      </el-main>
      <el-footer> </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { get_article } from "@/network/article/article";
import { useRouter, RouterLink } from "vue-router";
interface Article_data {
  article_content: string;
  article_id: number;
  article_img: string;
  article_time: string;
  article_title: string;
  article_views: number;
}
let article_data: Array<Article_data> = reactive([]);
let loading = ref(false);
const router = useRouter();
onMounted(() => {
  loading.value = true;
  // 查询文章
  get_article().then((res) => {
    article_data.push(...res.data);
    loading.value = false;
  });
});

function go_article(id: number): void {
  router.push({ name: "article_viewicle", params: { id } });
}
</script>

<style lang="less" scoped>
.index {
  width: 100%;
  min-height: 94vh;
  background-color: rgb(247, 237, 204);
  .title {
    height: 20vh;
    text-align: center;
    margin: auto;
    line-height: 20vh;
    font-size: 24px;
    font-weight: 800;
    color: rgb(58 59 54);
  }
  .main {
    width: 90%;
    margin: 0 auto;
    > div {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      // grid-template-rows: repeat(2, 400px);
      .cardSection {
        .el-card {
          margin: 20px;
          background-color: transparent;
          border-radius: 20px;
          cursor: pointer;
          .card-content {
            display: flex;
            flex-direction: column;
            align-items: center;

            .content-img {
              .el-image {
                border-radius: 20px;
              }
            }
            .content-info {
              height: 200px;
              margin-top: -100px;
              width: 80%;
              background-color: rgb(255, 251, 232);
              border-radius: 10px;
              z-index: 999;
              .content-info_box {
                padding: 20px;
                height: 100%;
                display: flex;
                flex-direction: column;
                .content-info-title {
                  font-size: 24px;
                  font-weight: 800;
                  color: #3a3b36;
                  text-align: center;
                }
                .content-info-content {
                  flex: 1;
                  color: #949590;
                  font-size: 18px;
                  overflow: hidden;
                  -webkit-line-clamp: 4;
                  line-height: 26px;
                  display: -webkit-box;
                  text-overflow: ellipsis;
                  -webkit-box-orient: vertical;
                }
                .content-info-time {
                  color: #949590;
                  font-size: 18px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
