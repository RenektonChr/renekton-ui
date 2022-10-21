<!--
 * @Author: 崔浩然
 * @Email：cuihaoran@hualala.com
 * @Date: 2022-10-20 15:20:40
 * @Description: HelloWorld组件
 * @FilePath: /renekton-ui/src/components/HelloWorld.vue
-->
<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <h1 class="underline text-3xl font-bold">{{ msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
