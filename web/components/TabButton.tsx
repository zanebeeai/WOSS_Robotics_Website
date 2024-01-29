import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  active: number;
  tab: number;
  children: ReactNode;
}

export const TabButton = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className={`px-5 py-2 rounded-lg font-semibold  ${
        props.active === props.tab
          ? "bg-[#191919] text-[#ffbb08]"
          : "text-gray-400 bg-[#191919] dark:hover:border-gray-600 border-2 border-[#2A2A2A] hover:text-white"
      }`}
    >
      {props.children}
    </button>
  );
};
