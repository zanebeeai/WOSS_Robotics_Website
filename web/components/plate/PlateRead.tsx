import type { PlateProps, TElement } from "@udecode/plate-common";

import { PlateEditor } from "./PlateEditor";

export function PlateRead({
  rawText,
  ...props
}: PlateProps & {
  rawText: string;
}) {
  let plateValue: TElement[];
  
  try {
    plateValue = JSON.parse(rawText);
  } catch {
    plateValue = [{ type: "p", children: [{ text: rawText }] }];
  }

  return <PlateEditor readOnly value={plateValue} {...props} />;
}
