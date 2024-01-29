import { ReactNode } from "react";
import { Navbar } from "./navbar/Navbar";

interface Props {
  title: string;
  season?: string;
  subtitle?: string | ReactNode;
}

export const Header = (props: Props) => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col px-4 mt-16 mb-8">
        <p className="h text-center text-5xl font-black text-primary">
          {props.title}
        </p>
        <p className="text-center text-xl text-gray-400 py-3">
          {props.season ? `${props.season} Season` : props.subtitle}
        </p>
      </div>
    </>
  );
};
