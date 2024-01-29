import { Title } from "@/components/Title";
import { SeasonEvent } from "@/components/season/SeasonEvent";
import Link from "next/link";

export const EventsScreen2018 = () => {
  return (
    <>
      <Title>Events Attended</Title>

      <div className="flex flex-col">
        <Link href="/season/2018/durham" legacyBehavior>
          <a className="mb-5">
            <SeasonEvent
              title="Durham College District Event"
              date="March 2nd - 4th, 2018"
            />
          </a>
        </Link>
        <Link href="/season/2018/mcmaster" legacyBehavior>
          <a className="mb-5">
            <SeasonEvent
              title="McMaster University District Event"
              date="April 6th - 8th, 2018"
            />
          </a>
        </Link>
        <Link href="/season/2018/provincials" legacyBehavior>
          <a>
            <SeasonEvent
              title="FIRST Ontario Provincial Championship - Technology Division"
              date="April 11th - 14th, 2018"
            />
          </a>
        </Link>
      </div>
    </>
  );
};
