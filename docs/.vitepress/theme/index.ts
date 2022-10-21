/*
 * @Author: 崔浩然
 * @Email：cuihaoran@hualala.com
 * @Date: 2022-10-21 09:11:51
 * @Description: 页面/组件/功能的描述
 * @FilePath: /renekton-ui/docs/.vitepress/theme/index.ts
 */
import DefaultTheme from 'vitepress/theme';
import HelloWorld from '../../../src/components/HelloWorld.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('HelloWorld', HelloWorld);
  },
};
