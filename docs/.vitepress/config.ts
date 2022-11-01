/*
 * @Author: 崔浩然
 * @Email：cuihaoran@gmail.com
 * @Date: 2022-10-21 07:45:14
 * @Description: vitepress的配置文件
 * @FilePath: /renekton-ui/docs/.vitepress/config.ts
 */
import { demoBlockPlugin } from 'vitepress-theme-demoblock';

export default {
  title: 'Renekton UI',
  lang: 'zh-CN',
  description: '一个基于Vue3的UI组件库',
  appearance: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '指南', link: '/guide' },
      {
        text: '组件',
        link: '/components',
      },
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/introduction' },
          { text: '开始', link: '/getting-started' },
        ],
      },
      {
        text: 'Components',
        items: [{ text: 'Button 按钮', link: '/components/button/index' }],
      },
    ],
  },
  markdown: {
    config: md => {
      // 使用更多的 markdown-it 插件!
      md.use(demoBlockPlugin);
    },
  },
};
