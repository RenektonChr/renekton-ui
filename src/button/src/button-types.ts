/*
 * @Author: 崔浩然
 * @Email：cuihaoran@hualala.com
 * @Date: 2022-10-24 08:52:29
 * @Description: button的属性对象的定义
 * @FilePath: /renekton-ui/src/button/src/button-types.ts
 */
import { ExtractPropTypes, PropType } from 'vue';

export type ButtonType = 'primary' | 'default' | 'text';

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'default',
  },
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
