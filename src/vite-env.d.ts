/*
 * @Author: 崔浩然
 * @Email：cuihaoran@gmail.com
 * @Date: 2022-10-20 15:20:40
 * @Description: 页面/组件/功能的描述
 * @FilePath: /renekton-ui/src/vite-env.d.ts
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
