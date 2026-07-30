<!--
 * @Author: baobaobao
 * @Date: 2023-10-18 12:54:03
 * @LastEditTime: 2023-10-28 23:48:27
 * @LastEditors: baobaobao
-->

<script setup lang="ts">
import { provide, reactive, toRefs } from "vue";
import { LAYUI_AVATAR_KEY } from "./use-avatar-list";
import { useSize } from "../../hooks/useSize";
import type { CommonSize } from "../../types";

export interface AvatarListProps {
  size?: CommonSize;
  radius?: boolean;
  autoFixSize?: boolean;
}

defineOptions({
  name: "LayAvatarList",
});

const props = withDefaults(defineProps<AvatarListProps>(), {
  radius: false,
  autoFixSize: true,
});

const { size } = useSize(props);

provide(
  LAYUI_AVATAR_KEY,
  reactive({
    ...toRefs(props),
    size,
  })
);
</script>

<template>
  <div class="layui-avatar-list">
    <slot></slot>
  </div>
</template>
