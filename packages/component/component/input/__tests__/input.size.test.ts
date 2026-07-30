import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import { defineComponent, h } from "vue";
import LayConfigProvider from "../../../provider/index.vue";
import LayInput from "../index.vue";

test("测试 input 组件继承 ConfigProvider size 到 DOM 属性", async () => {
  const Comp = defineComponent({
    setup() {
      return () =>
        h(
          LayConfigProvider,
          { size: "sm" },
          {
            default: () => h(LayInput),
          }
        );
    },
  });

  const wrapper = mount(Comp);
  expect(wrapper.find(".layui-input").attributes("size")).toBe("sm");
});

test("测试 input 组件自身 size 优先于 ConfigProvider", async () => {
  const Comp = defineComponent({
    setup() {
      return () =>
        h(
          LayConfigProvider,
          { size: "sm" },
          {
            default: () => h(LayInput, { size: "lg" }),
          }
        );
    },
  });

  const wrapper = mount(Comp);
  expect(wrapper.find(".layui-input").attributes("size")).toBe("lg");
});
