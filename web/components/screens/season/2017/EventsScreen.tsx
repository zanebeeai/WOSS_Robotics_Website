import { Title } from "@/components/Title";
import { SeasonEvent } from "@/components/season/SeasonEvent";
import Link from "next/link";

export const EventsScreen2017 = () => {
  return (
    <>
      <Title>Events Attended</Title>

      <div className="flex flex-col">
        <Link href="/season/2017/western" legacyBehavior>
          <a className="mb-5">
            <SeasonEvent
              title="Western University District Event 🥇"
              date="March 31st - April 2nd, 2017"
            />
          </a>
        </Link>
        <Link href="/season/2017/mcmaster" legacyBehavior>
          <a className="mb-5">
            <SeasonEvent
              title="McMaster University District Event"
              date="April 7th - April 9th, 2017"
            />
          </a>
        </Link>
        <Link href="/season/2017/provincials" legacyBehavior>
          <a>
            <SeasonEvent
              title="FIRST Ontario Provincial Championship"
              date="April 12th - 15th, 2018"
            />
          </a>
        </Link>
      </div>
    </>
  );
};
