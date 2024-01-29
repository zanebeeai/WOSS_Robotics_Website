import { Title } from "@/components/Title";
import { SeasonEvent } from "@/components/season/SeasonEvent";
import Link from "next/link";

export const EventsScreen2016 = () => {
  return (
    <>
      <Title>Events Attended</Title>
      <div className="flex flex-col">
        <Link href="/season/2016/toronto" legacyBehavior>
          <a className="mb-5">
            <SeasonEvent
              title="Greater Toronto East Regional District Event"
              date="March 9th - 12th, 2016"
            />
          </a>
        </Link>
        <Link href="/season/2016/worlds" legacyBehavior>
          <a>
            <SeasonEvent
              title="FIRST Championship - Hopper Subdivision"
              date="April 27th - 30th, 2016"
            />
          </a>
        </Link>
      </div>
    </>
  );
};
