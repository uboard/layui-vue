import type { DatePickerProps } from "../interface";
import { useSize } from "../../../hooks/useSize";

export function useProps(props: DatePickerProps) {
  return useSize(props);
}
