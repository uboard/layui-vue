import type { InjectionKey } from "vue";
import type { CommonSize } from "../../types";

export interface DescriptionsContext {
  border: boolean;
  column: number;
  direction: "horizontal" | "vertical";
  size: CommonSize;
}

export const DESCRIPTIONS_INJECTION_KEY: InjectionKey<DescriptionsContext> =
  Symbol("LayDescriptions");
