import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface Sponsor {
  name: string;
  logo: string;
  link: string;
  width: number;
  height: number;
}

interface SponsorTier {
  tier: string;
  colour: string;
  amount: string;
  sponsors: Sponsor[];
}

const sponsorData = [
  // {
  //
  //   tier: "Diamond",
  //   colour: "text-[#B9F2FF]",
  //   amount: "$1000+",
  //   sponsors: [
  //     {
  //       name: "Glenforest",
  //       logo: "/sponsors/glenforest.png",
  //       link: "https://glenforest.peelschools.org",
  //       width: 150,
  //       height: 100,
  //     },
  //     {
  //       name: "Genius Tools",
  //       logo: "/sponsors/genius-tools.png",
  //       link: "https://www.geniustools.net/",
  //       width: 320,
  //       height: 320,
  //     },
  //   ],
  // },
  {
    tier: "Gold",
    colour: "text-[#FFD700]",
    amount: "$500-$1000",
    sponsors: [
      {
        name: "CodeNinjas",
        logo: "/sponsors/code-ninjas.png",
        link: "https://www.codeninjas.com",
        width: 350,
        height: 150,
      },

    ],
  },
  {
    tier: "Silver",
    colour: "text-[#C0C0C0]",
    amount: "$250-$500",
    sponsors: [

    ]
  },
  {
    tier: "Bronze",
    colour: "text-[#CD7F32]",
    amount: "Up to $250",
    sponsors: [
      {
        name: "HackClub",
        logo: "/sponsors/hack-club.png",
        link: "https://www.hackclub.com",
        width: 250,
        height: 250,
      },
      {
        name: "Github",
        logo: "/sponsors/github.png",
        link: "https://www.github.com/",
        width: 200,
        height: 200,
      },

    ],
  },

];

const SponsorTier = ({ tier, colour, amount, sponsors }: SponsorTier) => (
  <div className="flex flex-col items-center justify-center">
    <p className="uppercase text-gray-400 mb-[-5px]">{amount}</p>
    <h1 className={`${colour} text-4xl font-black mb-5`}>{tier} Sponsors</h1>

    <div className="flex md:flex-row flex-col mb-10 gap-10 items-center justify-center">
      {sponsors.map((sponsor, index) => (
        <a
          key={index}
          href={sponsor.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={sponsor.logo}
            alt={`${sponsor.name} Logo`}
            height={sponsor.height}
            width={sponsor.width}
            priority={true}
          />
        </a>
      ))}
    </div>
  </div>
);

const SponsorsPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <>
          <Head>
            <title>Sponsors @ WOSS Robotics</title>
          </Head>
          <Header
            title="💸 Our Sponsors"
            subtitle={
              <span>
                Celebrating our dedicated sponsors and supporters. <br /> Want
                to sponsor us? Check out our{" "}
                <a
                  onClick={() =>
                    window.open("/SponsorshipPackage.pdf")
                  }
                  download
                  className="text-primary text-white hover:text-primary font-bold cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="">Sponsorship Package</span>{" "}
                  <span className="text-gray-400">(2023-24).</span>
                </a>{" "}
              </span>
            }
          />

          {sponsorData.map((tier, index) => (
            <SponsorTier key={index} {...tier} />
          ))}

          <Footer />
        </>
      )}
    </>
  );
};

export default SponsorsPage;
