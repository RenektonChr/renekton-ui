/*
 * @Author: 崔浩然
 * @Email：cuihaoran@hualala.com
 * @Date: 2022-10-20 15:20:40
 * @Description: 页面/组件/功能的描述
 * @FilePath: /renekton-ui/src/main.ts
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import './index.scss';

import RKButton from './button';

createApp(App).use(RKButton).mount('#app');
