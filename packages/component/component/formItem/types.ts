import type { Rule } from "async-validator";
import type { CommonSize } from "../../types";

export interface FormItemProps {
  prop?: string;
  mode?: "block" | "inline";
  label?: string;
  labelPosition?: "right" | "left" | "top";
  labelWidth?: string | number;
  errorMessage?: string;
  rules?: Rule;
  required?: boolean;
  requiredErrorMessage?: string;
  size?: CommonSize;
  tips?: string;
  inlineWidth?: string | number;
}
