import type { Rules, ValidateMessages } from "async-validator";
import type { CommonSize } from "../../types/common";
import type { modelType } from "../../types/form";
import type { TooltipProps } from "../tooltip/types";

export interface FormProps {
  model?: modelType;
  required?: boolean;
  rules?: Rules;
  size?: CommonSize;
  mode?: "block" | "inline";
  pane?: boolean;
  initValidate?: boolean;
  useCN?: boolean;
  labelPosition?: "right" | "left" | "top";
  labelWidth?: string | number;
  inlineWidth?: string | number;
  requiredIcons?: string;
  requiredErrorMessage?: string;
  validateMessage?: ValidateMessages;
  isLabelTooltip?: boolean;
  tooltipProps?: TooltipProps;
}
