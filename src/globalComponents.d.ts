/*
 * @Author: 崔浩然
 * @Email：cuihaoran@hualala.com
 * @Date: 2022-10-24 13:50:50
 * @Description: 全局组件的类型声明
 * @FilePath: /renekton-ui/src/globalComponents.d.ts
 */
import { RkButton } from './button';

declare module 'vue' {
  interface GlobalComponents {
    RkButton: typeof RkButton;
  }
}
