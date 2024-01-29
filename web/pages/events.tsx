import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Zoom from "react-medium-image-zoom";
import { Events } from "@/lib/lists/Events";
import Head from "next/head";
import { Description } from "./media";
import { Photo } from "@/components/Photo";

interface EventProps {
  title: string;
  subtitle?: string;
  img: string;
}

export default function EventsPage() {
  return (
    <>
      <Head>
        <title>Events [6070: Gryphon Machine]</title>
      </Head>

      <Header
        title="Outreach ❤️s Events"
        subtitle="Check out some of the events that 6070 has hosted, ran, or participated in!"
      />

      <div className="flex items-center justify-center">
        <div className="flex flex-col md:w-[1100px] md:grid md:grid-cols-3 md:gap-5 gap-10 pr-10 pl-10">
          <div className="flex justify-center items-center border-2 border-primary h-[200px] text-center rounded-lg">
            <div className="flex-col">
              <span className="font-black text-2xl text-white">
                6070 x YOUR EVENT
              </span>{" "}
              <br />
              <span className="text-sm text-white font-regular items-center">
                Email us @{" "}
                <a href="mailto:gryphonmachine@gmail.com">
                  <span className="text-primary hover:text-white">
                    gryphonmachine@gmail.com
                  </span>
                </a>
              </span>
            </div>
          </div>
          {Events.map((event: EventProps) => {
            return (
              <>
                <div className="mediaImage group">
                  <Zoom>
                    <Photo
                      className="opacity-90 md:h-[200px] md:w-[500px] hover:opacity-100"
                      img={event.img}
                    />
                  </Zoom>
                  <Description title={event.title} subtitle={event.subtitle} />
                </div>
              </>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}
