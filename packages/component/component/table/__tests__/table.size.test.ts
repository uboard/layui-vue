import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import { defineComponent, h } from "vue";
import LayConfigProvider from "../../../provider/index.vue";
import LayTable from "../index.vue";

test("测试 table 组件继承 ConfigProvider size", async () => {
  const Comp = defineComponent({
    setup() {
      return () =>
        h(
          LayConfigProvider,
          { size: "sm" },
          {
            default: () =>
              h(LayTable, {
                columns: [{ title: "名称", key: "name" }],
                dataSource: [{ id: 1, name: "A" }],
              }),
          }
        );
    },
  });

  const wrapper = mount(Comp);
  expect(wrapper.find(".layui-table").attributes("lay-size")).toBe("sm");
});
