import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Photo } from "@/components/Photo";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { VideoEmbed } from "@/components/VideoEmbed";
import Head from "next/head";
import { Media } from "@/lib/lists/Media";
import { GetServerSideProps } from "next";
import { API_URL, FRONTEND_API_URL } from "@/lib/constants";
import { ReactNode } from "react";

interface Props {
  videos: VideoProps[];
}

interface DescriptionProps {
  title: string;
  subtitle: string | ReactNode;
}

interface MediaProps {
  img: string;
  url: string;
  title: string;
  subtitle: string;
}

interface VideoProps {
  title: string;
  pubDate: string;
  link: string;
  guild: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: {
    link: string;
    type: string;
    thumbnail: string;
  };
  categories: string[];
}

export const Description = (props: DescriptionProps) => {
  const styles = "text-center md:text-sm text-md mt-3";

  return (
    <Subtitle className={styles}>
      <span className="text-white font-bold md:text-[16px] text-lg">
        {props.title}
      </span>
      <br />{" "}
      <span className="md:text-[14px] text-[18px]">{props.subtitle ?? ""}</span>
    </Subtitle>
  );
};

export default function MediaPage({ videos }: Props) {
  return (
    <>
      <Head>
        <title>Media [6070: Gryphon Machine]</title>
      </Head>

      <Header
        title="📸 Media"
        subtitle="Our competitions captured in stunning photos and videos."
      />

      <Title className="text-center">
        <span className="mr-2">🎥</span> Video Highlights
      </Title>

      <Subtitle className="text-center mt-[-20px] mb-5 text-s">
        check out our{" "}
        <a
          href="https://www.youtube.com/channel/UCPayYKB8-812GDZdHmfNk3g"
          className="text-primary hover:text-white"
          target="_blank"
        >
          youtube
        </a>{" "}
        channel :)
      </Subtitle>

      <div className="flex flex-col justify-center text-center mb-16">
        <div className="md:flex items-center justify-center">
          <div className="flex flex-col md:w-[1100px] md:grid md:grid-cols-3 gap-5 pr-10 pl-10">
            {...videos.slice(0, 9).map((video: VideoProps, key: number) => {
              return <VideoEmbed key={key} id={video.link.split("?v=")[1]} />;
            })}
          </div>
        </div>
      </div>

      <Title className="text-center">
        <span className="mr-2">📷</span> Photo Highlights
      </Title>
      <Subtitle className="text-center mt-[-20px] mb-[-10px] text-s">
        click the cover photos to view the full album!
      </Subtitle>

      <div className="flex items-center justify-center mt-10">
        <div className="flex flex-col md:w-[1100px] md:grid md:grid-cols-3 md:gap-x-5 md:gap-y-10 gap-10 pr-10 pl-10">
          {Media.map((media: MediaProps) => {
            return (
              <>
                <a href={media.url} target="_blank">
                  <div className="mediaImage flex flex-col items-center group">
                    <Photo
                      className="opacity-90 md:h-[200px] md:w-[500px] hover:opacity-100"
                      img={media.img}
                    />

                    <Description
                      title={media.title}
                      subtitle={media.subtitle}
                    />
                  </div>
                </a>
              </>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const videos = await fetch(`${FRONTEND_API_URL}/api/videos`).then((res) => res.json());

  return { props: { videos } };
};
