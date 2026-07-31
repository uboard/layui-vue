import type { ComputedRef } from "vue";
import type { CommonSize, LayConfigContext, LayFormContext } from "../types";
import { computed, inject } from "vue";
import { LAY_CONFIG_PROVIDER_KEY } from "../types";

export interface UseSizeOptions {
  /**
   * 当全局/表单尺寸不在组件支持范围内时的映射，例如 xs -> sm
   */
  fallbackMap?: Partial<Record<CommonSize, CommonSize>>;
}

export function useSize(
  props: {
    size?: string;
  },
  options?: UseSizeOptions
): { size: ComputedRef<CommonSize> } {
  // inject 必须在 setup 同步阶段调用，不能放进 computed
  const formContext = inject("LayForm", {} as LayFormContext);
  const configContext = inject(
    LAY_CONFIG_PROVIDER_KEY,
    {} as LayConfigContext
  );

  const size = computed(() => {
    const raw = (props.size ||
      formContext.size ||
      configContext.size ||
      "md") as CommonSize;

    return (options?.fallbackMap?.[raw] || raw) as CommonSize;
  });

  return { size };
}

export default useSize;
