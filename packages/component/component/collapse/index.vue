<script setup lang="ts">
import "./index.less";
import type { CommonSize } from "../../types";
import { computed, provide, ref, watch } from "vue";
import { useSize } from "../../hooks/useSize";

export interface CollapseProps {
  accordion?: boolean;
  modelValue?: number | string | number[] | string[];
  collapseTransition?: boolean;
  size?: CommonSize;
}

defineOptions({
  name: "LayCollapse",
});

const props = withDefaults(defineProps<CollapseProps>(), {
  modelValue: () => [],
  accordion: false,
  collapseTransition: true,
});

const { size } = useSize(props);

watch(
  () => props.modelValue,
  (val) => {
    activeValues.value = ([] as any[]).concat(val);
  }
);

const emit = defineEmits(["update:modelValue", "change"]);

const activeValues = ref<Array<any>>(([] as any[]).concat(props.modelValue));

provide("layCollapse", {
  accordion: props.accordion,
  collapseTransition: props.collapseTransition,
  size,
  activeValues,
  emit,
});

const classes = computed(() => [
  "layui-collapse",
  `layui-collapse-${size.value}`,
]);
</script>

<template>
  <div :class="classes" :size="size">
    <slot></slot>
  </div>
</template>
