<template>
  <div class="index">
    <el-container>
      <el-header style="height: auto">
        <div class="title">文章目录</div>
      </el-header>
      <el-main>
        <div class="main">
          <div>
            <div class="cardSection">
              <el-image
                :src="text1"
                alt=""
                fit="cover"
                style="
                  display: inline-block;
                  max-height: 100%;
                  width: 100%;
                  border-radius: 4px;
                "
              />
              <div><el-card>123</el-card></div>
            </div>
            <div class="cardSection">1</div>
            <div class="cardSection">1</div>
            <div class="cardSection">1</div>
          </div>
        </div>
      </el-main>
      <el-footer> </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import text1 from "@/assets/img/test1.png";
</script>

<style lang="less" scoped>
.index {
  height: 100%;

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
    width: 80%;
    margin: 0 auto;
    > div {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      grid-template-rows: repeat(2, 400px);
      .cardSection {
        display: flex;
        flex-direction: column;
        > div {
          width: 70%;
          margin-top: -20px;
        }
      }
    }
  }
}
</style>
