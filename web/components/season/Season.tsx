import { ReactNode } from "react";
import { FaBookOpen, FaCube, FaGithub } from "react-icons/fa";

interface Props {
  className?: string;
  title?: string;
  isSeason?: boolean;
  manual?: string;
  code?: string;
  cad?: string;
  children?: ReactNode;
}

export const Season = (props: Props) => {
  return (
    <div className="flex items-center justify-center p-5">
      <div
        className={`${props.className} bg-[#191919] rounded-lg md:w-[800px] px-10 py-10`}
      >
        <div>
          <h1 className="md:text-3xl text-3xl font-bold text-left mb-4">
            <span className="text-gray-400">
              <span>{props.title && `Introducing... `}</span>
              <span className="text-white">
                {props.title && `${props.title}`}
              </span>
              {props.title && `!`}
            </span>
          </h1>

          {props.isSeason === true && (
            <div className="flex md:flex-row flex-col gap-5 mb-8 text-gray-300 cursor-pointer">
              <a href={props.manual} target="_blank">
                <div className="flex hover:text-white">
                  <FaBookOpen className="mr-2 text-xl" /> Game Manual
                </div>
              </a>
              <a href={props.code} target="_blank">
                <div
                  className={`flex ${
                    !props.code
                      ? "text-gray-500 cursor-not-allowed"
                      : "hover:text-white "
                  }`}
                >
                  <FaGithub className="mr-2 text-xl" /> Code Release
                </div>
              </a>
              <a href={props.cad} target="_blank">
                <div
                  className={`flex ${
                    !props.cad
                      ? "text-gray-500 cursor-not-allowed"
                      : "hover:text-white "
                  }`}
                >
                  <FaCube className="mr-2 text-xl" /> CAD Model
                </div>
              </a>
            </div>
          )}
        </div>

        {props.children}
      </div>
    </div>
  );
};
