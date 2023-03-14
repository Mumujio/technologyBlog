<template>
  <div class="portfolios">
    <div class="portfolios-box">
      <el-card @click="enter_project(1)">
        <template #header shadow="hover"> 测试1 </template>
        <div>用来测试eachrts图表</div>
      </el-card>
      <el-card shadow="hover" @click="enter_project(2)">
        <template #header> 项目一 </template>
        <div>轨道交通虚拟仿真实验室</div>
        <p>技术栈：vue2+vue-router+element-ui+nodejs+express</p>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const enter_project = (sign: number): void => {
  console.log(sign);
  switch (sign) {
    case 1:
      router.push("/home/portfolios/echarts_test");
      break;
    case 2:
      break;

    default:
      break;
  }
};
</script>
<style scoped lang="less">
.portfolios {
  width: 100%;
  min-height: 94vh;
  background-color: rgb(247, 237, 204);
  &-box {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    padding-top: 40px;
    .el-card {
      margin-bottom: 20px;
      cursor: pointer;
    }
  }
}
</style>
