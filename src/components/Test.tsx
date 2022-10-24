/*
 * @Author: 崔浩然
 * @Email：cuihaoran@hualala.com
 * @Date: 2022-10-20 15:43:05
 * @Description: 页面/组件/功能的描述
 * @FilePath: /renekton-ui/src/components/Test.tsx
 */

// 1. 函数式组件
// export default () => <div>test</div>;

import { defineComponent, ref, withModifiers } from 'vue';

// 2. defineComponent

// export default defineComponent({
//   render() {
//     return <div>test</div>;
//   },
// });

// 3. defineComponent + setup
/**
 * 1. 摒弃了this
 * 2. 对TS支持较好
 * 3. 借助了babel-plugin-jsx
 *
 * vue独特的概念：修饰符、slot、props、emit、derictive...
 */
export default defineComponent({
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
  },
  emits: ['click'],
  setup(props, ctx) {
    console.log('props--->', props);
    console.log('ctx----->', ctx);
    const { slots, emit } = ctx;

    // 响应式的数据count
    const count = ref(0);
    const condition = ref(false);
    const list = ref<string[]>(['a', 'b', 'c']);

    const increment = () => {
      count.value++;
      emit('click', () => {
        return '派发点击事件';
      });
    };
    return () => {
      // v-if 写成三元表达式
      const span = condition.value ? <span>A</span> : <span>B</span>;
      return (
        <div onClick={withModifiers(increment, ['self'])}>
          <p>test: {count.value}</p>
          <input type="text" v-focus v-model={count.value} />
          <div>{span}</div>
          <ul>
            {list.value.map(item => (
              <li>{item}</li>
            ))}
          </ul>
          {/* 默认插槽内容 */}
          <div>{slots.default ? slots.default() : 'default content'}</div>
          <div>{slots.title ? slots.title() : 'title content'}</div>
        </div>
      );
    };
  },
});
