/*
 * @Author: 崔浩然
 * @Email：cuihaoran@hualala.com
 * @Date: 2022-10-24 08:15:37
 * @Description: 页面/组件/功能的描述
 * @FilePath: /renekton-ui/src/button/index.ts
 */
import { App } from 'vue';
import RkButton from './src/button';

export { RkButton };

// 导出插件
export default {
  install(app: App) {
    app.component(RkButton.name, RkButton);
  },
};
