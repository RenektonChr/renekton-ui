/*
 * @Author: 崔浩然
 * @Email：cuihaoran@hualala.com
 * @Date: 2022-10-24 08:15:57
 * @Description: Button组件
 * @FilePath: /renekton-ui/src/button/src/button.tsx
 */
import { defineComponent, toRefs } from 'vue';
import { buttonProps, ButtonProps } from './button-types';

export default defineComponent({
  name: 'RkButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type } = toRefs(props);
    console.log(type.value);
    return () => {
      const defaultSlot = slots.default ? slots.default() : '';
      return <button class={`rk-button rk-button-${type.value}`}>{defaultSlot}</button>;
    };
  },
});
