import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import { defineComponent, h } from "vue";
import LayConfigProvider from "../../../provider/index.vue";
import LayButton from "../index.vue";

test("测试 button 组件 default 插槽", async () => {
  const wrapper = await mount(LayButton, {
    slots: {
      default: "默认插槽",
    },
  });
  expect(wrapper.text()).toContain("默认插槽");
});

test("测试 button 组件 type 属性", async () => {
  const wrapper = await mount(LayButton, {
    props: {
      type: "primary",
    },
  });
  expect(wrapper.classes("layui-btn-primary")).toBe(true);
});

test("测试 button 组件继承 ConfigProvider size", async () => {
  const Comp = defineComponent({
    setup() {
      return () =>
        h(
          LayConfigProvider,
          { size: "sm" },
          {
            default: () => h(LayButton, null, { default: () => "按钮" }),
          }
        );
    },
  });

  const wrapper = mount(Comp);
  expect(wrapper.find(".layui-btn").classes("layui-btn-sm")).toBe(true);
});

test("测试 button 组件 size 优先于 ConfigProvider", async () => {
  const Comp = defineComponent({
    setup() {
      return () =>
        h(
          LayConfigProvider,
          { size: "sm" },
          {
            default: () =>
              h(LayButton, { size: "lg" }, { default: () => "按钮" }),
          }
        );
    },
  });

  const wrapper = mount(Comp);
  expect(wrapper.find(".layui-btn").classes("layui-btn-lg")).toBe(true);
});
