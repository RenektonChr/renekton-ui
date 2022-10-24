<!--
 * @Author: 崔浩然
 * @Email：cuihaoran@hualala.com
 * @Date: 2022-10-20 15:20:40
 * @Description: 页面/组件/功能的描述
 * @FilePath: /renekton-ui/src/App.vue
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Test from './components/Test';
import HelloWorld from './components/HelloWorld.vue';

const onclick = (content: string) => {
  console.log(content);
};
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="崔浩然"></HelloWorld>
  <Test @click="onclick">
    <template #default>默认插槽</template>
    <template #title>title</template>
  </Test>
  <!--
    1. button的类型：primary、text
    2. button的尺寸：size：default、small、large、block
   -->
  <rk-button type="primary">确定</rk-button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
