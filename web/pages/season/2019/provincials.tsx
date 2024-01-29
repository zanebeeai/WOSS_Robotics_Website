import { EventData } from "@/components/EventData";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { Season } from "@/components/season/Season";
import { API_URL } from "@/lib/constants";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface Props {
  qualData: matchData;
}

export default function Provincials2019({ qualData }: Props) {
  return (
    <>
      <Head>
        <title>
          FIRST Ontario Provincial Championship [6070: Gryphon Machine]
        </title>
      </Head>

      <Header
        title="FIRST Ontario Provincial Championship"
        subtitle="2019 Season [Technology Division] - Destination: Deep Space"
      />

      <Season className="w-[350px]">
        <Title className="mt-[-30px]">Qualification Matches</Title>
        <EventData data={qualData} />

        <Title className="mt-10">Playoff Matches</Title>
        <Subtitle className="mt-[-20px]">
          Unfortunately, we did not participate in playoffs.
        </Subtitle>
      </Season>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const qualData = await fetch(`${API_URL}/api/2019/provincials`).then((res) =>
    res.json()
  );

  return { props: { qualData } };
};
