import { Title } from "@/components/Title";
import { SeasonEvent } from "@/components/season/SeasonEvent";
import Link from "next/link";

export const EventsScreen2023 = () => {
  return (
    <>
      <Title>Events Attended</Title>
      <div className="flex flex-col">
        <Link href="/season/2023/western" legacyBehavior>
          <a className="mb-5">
            <SeasonEvent
              title="Western University District Event"
              date="March 17th - March 19th, 2023"
            />
          </a>
        </Link>
        <Link href="/season/2023/windsor" legacyBehavior>
          <a>
            <SeasonEvent
              title="Windsor Essex Great Lakes District Event"
              date="March 30th - April 1st, 2023"
            />
          </a>
        </Link>
      </div>
    </>
  );
};
