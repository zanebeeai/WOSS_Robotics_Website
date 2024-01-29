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
      <div className="flex flex-col md:grid md:grid-cols-3 gap-5 mb-10">
        <a href="https://github.com/gryphonmachine" target="_blank">
          <AboutCard title="Learn." bg="/team-pics/IMG_3793.jpg" />
        </a>
        <Link href="/events" legacyBehavior>
          <a>
            <AboutCard title="Share." bg="/events/IMG_6087.JPG" />
          </a>
        </Link>
        <Link href="/builds" legacyBehavior>
          <a>
            <AboutCard title="Compete." bg="/season/6070-charged-up.png" />
          </a>
        </Link>
      </div>

      <h1 className="md:text-4xl text-3xl font-bold text-left mb-5">
        <span className="text-gray-400">
          We are team <span className="text-primary">6070</span> 🦁 🦅
        </span>
      </h1>

      <div className="space-y-5">
        <div>
          <h2 className="font-bold text-gray-300 text-lg">About Us</h2>
          <p className="text-left text-gray-400">
            Hi there, welcome to our site! We&apos;re Team 6070 (A.K.A Gryphon
            Machine) from{" "}
            <a
              href="https://glenforest.peelschools.org/"
              className="text-primary hover:text-white"
              target="_blank"
            >
              Glenforest Secondary School in Mississauga, ON, Canada 🇨🇦 
            </a>
            ! We&apos;re a team of passionate and dedicated students who love
            everything about Robotics.
            <br />
            <br />
            Our team has been competing in the FIRST Robotics Competition (FRC)
            for several years now and we&apos;ve gained a reputation for being a
            fierce competitor on the field. But more than that, we&apos;re a
            tight-knit community of individuals who share a common love for STEM
            and the spirit of gracious professionalism.{" "}
          </p>
        </div>

        <div>
          <h2 className="font-bold text-gray-300 text-lg">Our Mission</h2>
          <p className="text-left text-gray-400">
            To inspire, empower, and spread the message of FIRST within
            ourselves and our community, while also raising awareness for
            Robotics, Engineering, and the STEM fields.
          </p>
        </div>
      </div>
    </div>
  );
};
