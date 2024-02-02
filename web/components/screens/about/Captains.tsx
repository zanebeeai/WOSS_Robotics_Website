import { Mentors, Team2024 } from "@/lib/lists/Team";
import { Title } from "../../Title";
import Image from "next/image";

interface Props {
  img: string;
  name: string;
  role: string
}

interface TeamMember {
  name: string;
  img: string;
  role: string;
}

const Captain = (props: Props) => {
  return (
    <div className="flex bg-[#191919] dark:hover:border-gray-600 border-2 border-[#2A2A2A] hover:cursor-default py-4 px-5 rounded-lg">
      <Image
        src={props.img}
        alt={props.name}
        height="350"
        width="350"
        priority={true}
        className="h-12 w-12 mr-5 rounded-full"
      />
      <div>
        <h1 className="font-bold text-md text-white">{props.name}</h1>
        <p className="text-gray-400">{props.role}</p>
      </div>
    </div>
  );
};

const Placeholder = () => {
  return (
    <div className="flex bg-[#191919] dark:hover:border-gray-600 border-2 border-[#2A2A2A] group hover:cursor-default shadow rounded-lg p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-400 group-hover:bg-slate-300 h-10 w-10"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-2 bg-slate-300 group-hover:bg-slate-300 rounded"></div>
          <div className="h-2 bg-slate-300 group-hover:bg-slate-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export const CaptainsScreen = () => {
  return (
    <div className="flex flex-col space-y-10">
      <div className="border-2 border-gray-600 rounded-lg px-10 py-8 justify-center items-center flex">
        <Image
          className="rounded-lg"
          src="/team-pics/team.jpg"
          height="850"
          width="850"
          alt="Tournament Team Photo"
          priority={true}
        />
      </div>

      <div className="border-2 border-gray-600 rounded-lg px-10 py-8">
        <Title>Mentors</Title>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-5">
          {Mentors.map((member: TeamMember, key: number) => {
            return (
              <Captain
                key={key}
                name={member.name}
                role={member.role}
                img={member.img}
              />
            );
          })}
        </div>
      </div>
      <div className="border-2 border-gray-600 rounded-lg px-10 py-8">
        <Title>
          Captains <span className="font-bold text-gray-400">/ </span>
          <span className="text-gray-400 font-medium">
            Current Leadership (2023-2024)
          </span>
        </Title>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-5">
          {Team2024.map((member: TeamMember, key: number) => {
            return (
              <Captain
                key={key}
                name={member.name}
                role={member.role}
                img={member.img}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
