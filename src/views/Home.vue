<template>
  <div>123</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { get_article } from "@/network/article/article";
onMounted(() => {
  get_article();
});
</script>
