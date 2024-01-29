import { Title } from "@/components/Title";
import { SeasonEvent } from "@/components/season/SeasonEvent";
import Link from "next/link";

export const EventsScreen2019 = () => {
  return (
    <>
      <Title>Events Attended</Title>

      <div className="flex flex-col">
        <Link href="/season/2019/durham" legacyBehavior>
          <a className="mb-5">
            <SeasonEvent
              title="Durham College District Event"
              date="March 1st - 3rd, 2019"
            />
          </a>
        </Link>
        <Link href="/season/2019/mcmaster" legacyBehavior>
          <a className="mb-5">
            <SeasonEvent
              title="McMaster University District Event 🥇"
              date="April 5th - 7th, 2019"
            />
          </a>
        </Link>
        <Link href="/season/2019/provincials" legacyBehavior>
          <a>
            <SeasonEvent
              title="FIRST Ontario Provincial Championship - Technology Division"
              date="April 10th - 13th, 2018"
            />
          </a>
        </Link>
      </div>
    </>
  );
};
