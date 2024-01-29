import Image from "next/image";

interface Props {
  className?: string;
  title: string;
  subtitle: string;
  bg: string;
}

export const SeasonCard = (props: Props) => {
  return (
    <div
      className={`${props.className} group seasonBgImage group/arrow hover:cursor-pointer border-solid border-2 border-primary hover:border-white rounded-lg md:w-[800px] px-10 py-24 relative`}
    >
      <div className="relative">
        <h1 className="text-4xl text-white font-bold text-center mb-2">
          {props.title}{" "}
          <span className="hidden group-hover/arrow:inline-block">→</span>
        </h1>
        <p className="text-center text-gray-300 font-bold">
          {props.subtitle} Season
        </p>
      </div>
      <Image
        className="backgroundImage opacity-50 group-hover:opacity-60 absolute inset-0 w-full h-full object-cover"
        src={props.bg}
        alt="Background Image"
        priority={true}
        fill
        quality={20}
      />
    </div>
  );
};
