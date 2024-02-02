import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
  title: string;
  bg: string;
}

export const AboutCard = (props: Props) => {
  return (
    <div
      className={`${props.className} group hover:cursor-pointer border-solid border-2 border-primary hover:border-white rounded-lg md:w-[275px] px-10 py-24 relative`}
    >
      <div className="relative">
        <h1 className="text-4xl text-white font-bold text-center mb-2 uppercase">
          {props.title}{" "}
        </h1>
      </div>
      <Image
        className="backgroundImage opacity-40 group-hover:opacity-50 absolute inset-0 w-full h-full object-cover transition-all duration-300"
        src={props.bg}
        alt="Background Image"
        priority={true}
        fill
        quality={20}
      />
    </div>
  );
};
export const GeneralScreen = () => {
  return (
    <div className="border-2 border-gray-600 rounded-lg md:w-[939px] px-10 py-8">

      <h1 className="md:text-4xl text-3xl font-bold text-left mb-5">
        <span className="text-gray-400">
          We are <span className="text-primary">WOSS Robotics</span> 🐯
        </span>
      </h1>

      <div className="space-y-5">
        <div>
          <h2 className="font-bold text-gray-300 text-lg">About Us</h2>
          <p className="text-left text-gray-400">
            Hi there, welcome to our site! We are a VEX Robotics and EV Race team from {" "}
            <a
              href="https://wos.hdsb.ca/"
              className="text-primary hover:text-white"
              target="_blank"
            >
              White Oaks Secondary School in Oakville, ON, Canada 🇨🇦
            </a>
            ! We&apos;re a team of passionate students who love
            everything about Robotics & Engineering.
            <br />
            <br />
            Our VEX team has been competing since 2022,
            and our newly established Electric Vehicle team has been working hard since 2023 to compete in May 2025. {" "}
          </p>
        </div>

        <div>
          <h2 className="font-bold text-gray-300 text-lg">Our Mission</h2>
          <p className="text-left text-gray-400">
            Some cool, arguably even very cool, or astonishingly amazing mission statement
            would look really good right around here!
          </p>
        </div>
      </div>
    </div>
  );
};
