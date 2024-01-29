import { ReactNode } from "react";

interface Props {
  className: string;
  children: ReactNode;
}

export const Subtitle = (props: Props) => {
  return (
    <p className={`text-xl text-gray-400 ${props.className}`}>
      {props.children}
    </p>
  );
};
