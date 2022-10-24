<!--
 * @Author: 崔浩然
 * @Email：cuihaoran@hualala.com
 * @Date: 2022-10-20 15:20:40
 * @Description: 页面/组件/功能的描述
 * @FilePath: /renekton-ui/src/App.vue
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <HelloWorld msg="renekton-ui" class="mb-4"></HelloWorld>
  <div class="mb-2">
    <rk-button type="primary" size="medium">确定</rk-button>
    <rk-button type="secondary" size="medium">取消</rk-button>
    <rk-button type="text" size="medium">文本</rk-button>
  </div>
  <div class="mb-2">
    <rk-button type="primary" size="small">Small</rk-button>
    <rk-button type="primary" size="medium">Medium</rk-button>
    <rk-button type="primary" size="large">Large</rk-button>
  </div>
  <div class="mb-2">
    <rk-button type="secondary" size="small">Small</rk-button>
    <rk-button type="secondary" size="medium">Medium</rk-button>
    <rk-button type="secondary" size="large">Large</rk-button>
  </div>
  <div class="mb-2">
    <rk-button type="primary" size="medium">Primary</rk-button>
    <rk-button type="primary" size="medium" disabled>Primary</rk-button>
  </div>
  <div class="mb-2">
    <rk-button type="secondary" size="medium">Secondary</rk-button>
    <rk-button type="secondary" size="medium" disabled>Secondary</rk-button>
  </div>
  <div class="mb-2">
    <rk-button type="text" size="small">Text</rk-button>
    <rk-button type="text" size="small" disabled>Disabled</rk-button>
  </div>
  <div class="mb-2">
    <rk-button type="primary" block>Confirm</rk-button>
    <rk-button block>Cancel</rk-button>
  </div>
</template>

<style scoped></style>
