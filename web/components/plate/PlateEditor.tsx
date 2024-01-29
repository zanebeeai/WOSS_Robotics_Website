import { Plate, PlateProps } from "@udecode/plate";
import { plugins } from "./PlatePlugins";

export function PlateEditor(props: PlateProps) {
  return <Plate {...props} plugins={plugins} />;
}
