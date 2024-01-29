import { cn } from "@/lib/style";
import type { PlateLeafProps } from "@udecode/plate";
import { PlateLeaf } from "@udecode/plate";

const BoldLeaf = ({ children, className, ...props }: PlateLeafProps) => (
  <PlateLeaf
    asChild
    className={cn("text-foreground font-bold", className)}
    {...props}
  >
    <strong>{children}</strong>
  </PlateLeaf>
);

const ItalicLeaf = ({ children, className, ...props }: PlateLeafProps) => (
  <PlateLeaf asChild className={cn("text-foreground", className)} {...props}>
    <em>{children}</em>
  </PlateLeaf>
);

const UnderlineLeaf = ({ children, className, ...props }: PlateLeafProps) => (
  <PlateLeaf
    asChild
    className={cn("text-foreground underline-offset-2", className)}
    {...props}
  >
    <u>{children}</u>
  </PlateLeaf>
);

const StrikethroughLeaf = ({
  children,
  className,
  ...props
}: PlateLeafProps) => (
  <PlateLeaf asChild className={cn("text-foreground", className)} {...props}>
    <s>{children}</s>
  </PlateLeaf>
);

const SubscriptLeaf = ({ children, className, ...props }: PlateLeafProps) => (
  <PlateLeaf asChild className={cn("text-foreground", className)} {...props}>
    <sub>{children}</sub>
  </PlateLeaf>
);

const SuperscriptLeaf = ({ children, className, ...props }: PlateLeafProps) => (
  <PlateLeaf asChild className={cn("text-foreground", className)} {...props}>
    <sup>{children}</sup>
  </PlateLeaf>
);

const CodeLeaf = ({ children, className, ...props }: PlateLeafProps) => (
  <PlateLeaf
    asChild
    className={cn(
      "bg-secondary border border-solid rounded-md border px-1 py-[2px] font-mono",
      className
    )}
    {...props}
  >
    <code>{children}</code>
  </PlateLeaf>
);

export {
  BoldLeaf,
  CodeLeaf,
  ItalicLeaf,
  StrikethroughLeaf,
  SubscriptLeaf,
  SuperscriptLeaf,
  UnderlineLeaf,
};
