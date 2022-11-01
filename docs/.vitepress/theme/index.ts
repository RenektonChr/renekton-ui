/*
 * @Author: 崔浩然
 * @Email：cuihaoran@gmail.com
 * @Date: 2022-10-21 09:11:51
 * @Description: 页面/组件/功能的描述
 * @FilePath: /renekton-ui/docs/.vitepress/theme/index.ts
 */
import DefaultTheme from 'vitepress/theme';

import 'vitepress-theme-demoblock/theme/styles/index.css';
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue';
import Demo from 'vitepress-theme-demoblock/components/Demo.vue';

import HelloWorld from '../../../src/components/HelloWorld.vue';
import Test from '../../../src/components/Test';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('DemoBlock', DemoBlock);
    app.component('Demo', Demo);

    app.component('HelloWorld', HelloWorld);
    app.component('Test', Test);
  },
};
