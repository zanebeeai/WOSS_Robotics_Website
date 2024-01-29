import { Title } from "@/components/Title";
import Image from "next/image";

interface Props {
  name: string;
  status: string;
  weight: string;
  height: string;
  width: string;
  length: string;
  highlights: string[];
}

const Details = (props: Props) => {
  return (
    <>
      <div className="flex">
      <h1 className="px-5 font-semibold transition-all duration-300 text-gray-400 bg-[#2A2A2A] dark:hover:border-gray-600 border-2 border-[#2A2A2A] hover:text-white md:w-[85px] w-[110px] py-1 px-4 rounded-lg text-center font-black text-sm mr-3">
          Name
        </h1>
        <span className="text-gray-300 font-medium">{props.name}</span>
      </div>
      <div className="flex">
        <h1
          className={`px-5 font-semibold transition-all duration-300 text-gray-400 bg-[#2A2A2A] dark:hover:border-gray-600 border-2 border-[#2A2A2A] hover:text-white md:w-[85px] w-[110px] py-1 px-4 rounded-lg text-center font-black text-sm mr-3`}
        >
          Status
        </h1>
        <span className={`text-gray-300 font-medium`}>{props.status}</span>
      </div>
      <div className="flex">
      <h1 className="flex justify-center px-5 font-semibold transition-all duration-300 text-gray-400 bg-[#2A2A2A] dark:hover:border-gray-600 border-2 border-[#2A2A2A] hover:text-white md:w-[85px] w-[110px] py-1 px-4 rounded-lg text-center font-black text-sm mr-3">
          Weight
        </h1>
        <span className="text-gray-300 font-medium">{props.weight} lbs</span>
      </div>
      <div className="flex">
        <h1 className="px-5 font-semibold transition-all duration-300 text-gray-400 bg-[#2A2A2A] dark:hover:border-gray-600 border-2 border-[#2A2A2A] hover:text-white md:w-[85px] w-[110px] py-1 px-4 rounded-lg text-center font-black text-sm mr-3">
          Size
        </h1>
        <span className="text-gray-300 font-medium">
          {props.width}″ W x {props.length}″ L x {props.height}″ H
        </span>
      </div>
      <h1 className="font-black text-gray-300 text-xl">Robot Highlights</h1>
      <span className="text-sm text-gray-400">
        → {props.highlights[0]}
      </span>{" "}
      <br />
      <span className="text-sm text-gray-400">
        → {props.highlights[1]}
      </span>{" "}
      <br />
      <span className="text-sm text-gray-400">
        → {props.highlights[2]}
      </span>{" "}
    </>
  );
};

export const RobotsScreen2023 = () => {
  return (
    <>
      <Title>Robot(s) Breakdown</Title>
      <div className="flex md:flex-row flex-col mb-5 bg-[#191919] rounded-lg p-10 border-2 border-[#2A2A2A]">
        <Image
          src="/icbm.webp"
          className="md:mb-0 mb-10"
          alt="2023 ICBM Bot"
          width="350"
          height="350"
          priority={true}
        />
        <div className="flex-col space-y-4">
          <Details
            name="ICBM"
            status="Inactive"
            weight="112"
            width="33"
            length="39"
            height="54"
            highlights={[
              "6 Wheel Arcade Drive",
              "1 Stage Telescoping Arm",
              "Revamped version of Mini Me",
            ]}
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col bg-[#191919] rounded-lg p-10 border-2 border-[#2A2A2A]">
        <Image
          src="/mini-me.png"
          className="md:mb-0 mb-10 md:mr-[125px]"
          alt="2023 ICBM Bot"
          width="225"
          height="225"
          priority={true}
        />
        <div className="flex-col space-y-4">
          <Details
            name="Mini Me"
            status="Dismantled"
            weight="116"
            width="33"
            length="39"
            height="52"
            highlights={[
              "6 Wheel Tank Drive",
              "Chain System for Arm",
              "2 Robots in 1",
            ]}
          />
        </div>
      </div>
    </>
  );
};
