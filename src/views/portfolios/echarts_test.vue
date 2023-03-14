<template>
  <div id="echarts"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";
import * as echarts from "echarts";
import "./world.js";
let mychart: echarts.EChartsType;
onMounted(() => {
  mychart = echarts.init(document.querySelector("#echarts") as HTMLElement);
  mychart.setOption({
    backgroundColor: "#404a59",
    title: {
      text: "世界地图",
      subtext: "",
      left: "center",
      top: "top",
      textStyle: {
        fontSize: 25,
        color: "rgba(255,255,255, 0.9)",
      },
    },
    grid: {
      left: "50%",
      right: "50%",
      top: "75%",
      bottom: 0,
    },
    xAxis: {},
    yAxis: {},
    series: [
      {
        id: "map",
        type: "map",
        map: "world",
        top: "8%",
        bottom: "25%",
        left: "10%",
        roam: true,
        itemStyle: {
          color: "#323c48",
          areaColor: "rgba(255,255,255, 0.5)",
        },
        emphasis: {
          itemStyle: {
            areaColor: "rgba(255,111,255, 0.5)",
          },
          lable: {
            show: false,
          },
        },
        select: {
          itemStyle: {
            areaColor: "rgba(255,111,255, 0.5)",
          },
        },

        data: [],
      },
    ],
  });
  window.addEventListener("resize", resize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resize);
});
function resize() {
  mychart.resize();
}
</script>
<style scoped lang="less">
#echarts {
  width: 100vw;
  height: 94vh;
}
</style>
