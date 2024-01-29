import { Subtitle } from "../Subtitle";

interface Props {
  title: string;
  date: string;
}

export const SeasonEvent = (props: Props) => {
  return (
    <div className="group/arrow bg-[#2A2A2A] px-10 py-7 rounded-lg hover:bg-[#191919] hover:text-white transition-all duration-300">
      <h1 className="text-gray-200 text-2xl font-bold mb-3">
        {props.title}{" "}
        <span className="hidden group-hover/arrow:inline-block">→</span>
      </h1>

      <Subtitle className="mt-[-10px]">{props.date}</Subtitle>
    </div>
  );
};
