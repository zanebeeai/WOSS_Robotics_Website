import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Zoom from "react-medium-image-zoom";
import { Photo } from "@/components/Photo";
import { Awards } from "@/lib/lists/Awards";
import Head from "next/head";
import { Description } from "./media";

interface AwardProps {
  img: string;
  title: string;
  year: string;
  subtitle: string;
}

export default function AwardsPage() {
  return (
    <>
      <Head>
        <title>Awards [6070: Gryphon Machine]</title>
      </Head>

      <Header
        title="🏆 Awards"
        subtitle="Celebrating the exceptional achievements of Team 6070:"
      />

      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center md:w-[1100px] md:grid md:grid-cols-3 md:gap-x-5 md:gap-y-10 gap-10 pr-10 pl-10">
          {Awards.map((award: AwardProps, key: number) => {
            return (
              <>
                <div className="mediaImage flex flex-col items-center group" key={key}>
                  <Zoom>
                    <Photo
                      className="opacity-90 md:h-[200px] md:w-[500px] hover:opacity-100"
                      img={award.img}
                    />
                  </Zoom>
                  <Description
                    title={award.title}
                    subtitle={
                      <span>
                        <span className="font-bold">{award.year}</span> |{" "}
                        {award.subtitle}
                      </span>
                    }
                  />
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
