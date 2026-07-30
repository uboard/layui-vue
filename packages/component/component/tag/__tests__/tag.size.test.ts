import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import { defineComponent, h } from "vue";
import LayConfigProvider from "../../../provider/index.vue";
import LayTag from "../index.vue";

test("测试 tag 组件继承 ConfigProvider size", async () => {
  const Comp = defineComponent({
    setup() {
      return () =>
        h(
          LayConfigProvider,
          { size: "sm" },
          {
            default: () => h(LayTag, null, { default: () => "标签" }),
          }
        );
    },
  });

  const wrapper = mount(Comp);
  expect(wrapper.find(".layui-tag").classes("layui-tag-size-sm")).toBe(true);
});

test("测试 tag 组件自身 size 优先于 ConfigProvider", async () => {
  const Comp = defineComponent({
    setup() {
      return () =>
        h(
          LayConfigProvider,
          { size: "sm" },
          {
            default: () =>
              h(LayTag, { size: "lg" }, { default: () => "标签" }),
          }
        );
    },
  });

  const wrapper = mount(Comp);
  expect(wrapper.find(".layui-tag").classes("layui-tag-size-lg")).toBe(true);
});
