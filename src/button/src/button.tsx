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
    const { type, size, disabled, block } = toRefs(props);
    console.log(type.value);
    return () => {
      const defaultSlot = slots.default ? slots.default() : '';
      const blockClass = block.value ? 'rk-button--block' : '';
      return (
        <button
          disabled={disabled.value}
          class={`rk-button rk-button--${type.value} rk-button--${size.value} ${blockClass}`}
        >
          {defaultSlot}
        </button>
      );
    };
  },
});
