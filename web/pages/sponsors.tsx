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
  {
    tier: "Title",
    colour: "text-[#E5E4E2]",
    amount: "$5000+",
    sponsors: [
      {
        name: "Erin Mills Mazda",
        logo: "/sponsors/mazda.png",
        link: "https://erinmillsmazda.ca",
        width: 250,
        height: 100,
      }
    ]
  },
  {

    tier: "Diamond",
    colour: "text-[#B9F2FF]",
    amount: "$2500+",
    sponsors: [
      {
        name: "Glenforest",
        logo: "/sponsors/glenforest.png",
        link: "https://glenforest.peelschools.org",
        width: 150,
        height: 100,
      },
      {
        name: "Genius Tools",
        logo: "/sponsors/genius-tools.png",
        link: "https://www.geniustools.net/",
        width: 320,
        height: 320,
      },
    ],
  },
  {
    tier: "Gold",
    colour: "text-[#FFD700]",
    amount: "$1000-$2500",
    sponsors: [
      {
        name: "Quality Inn",
        logo: "/sponsors/quality-inn.png",
        link: "https://www.choicehotels.com/en-ca/quality-inn",
        width: 350,
        height: 300,
      },
      {
        name: "Gene Haas Foundation",
        logo: "/sponsors/gene-haas.webp",
        link: "https://ghaasfoundation.org/content/ghf/en/home.html",
        width: 175,
        height: 175,
      },
      {
        name: "Bempro",
        logo: "/sponsors/bempro.png",
        link: "https://www.bempro.com",
        width: 400,
        height: 400,
      },
      {
        name: "RBC",
        logo: "/sponsors/rbc.png",
        link: "https://www.rbcroyalbank.com",
        width: 100,
        height: 100,
      },
      {
        name: "Nye Manufacturing",
        logo: "/sponsors/nye.png",
        link: "https://nyemanufacturing.com",
        width: 175,
        height: 175,
      },
    ],
  },
  {
    tier: "Bronze",
    colour: "text-[#CD7F32]",
    amount: "Up to $1000",
    sponsors: [
      {
        name: "Gap Wireless",
        logo: "/sponsors/gap-wireless.png",
        link: "https://gapwireless.com",
        width: 250,
        height: 250,
      },
      {
        name: "Princess Auto",
        logo: "/sponsors/princess-auto.png",
        link: "https://www.princessauto.com/",
        width: 200,
        height: 200,
      },
      {
        name: "Zafin",
        logo: "/sponsors/zafin.png",
        link: "https://zafin.com",
        width: 225,
        height: 225,
      },
      {
        name: "Koojo Custom Power Coating",
        logo: "/sponsors/koojo.png",
        link: "https://www.facebook.com/p/Koojo-CustomPowderCoating-100054628891519/",
        width: 150,
        height: 150,
      },
      {
        name: "Agile Manufacturing",
        logo: "/sponsors/agile.png",
        link: "https://agile-manufacturing.com/",
        width: 350,
        height: 350,
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
            <title>Sponsors [6070: Gryphon Machine]</title>
          </Head>
          <Header
            title="💸 Our Sponsors"
            subtitle={
              <span>
                Celebrating our dedicated sponsors and supporters. <br /> Want
                to sponsor us? Check out our{" "}
                <a
                  onClick={() =>
                    window.open("/6070_SponsorshipPackage-2024.pdf")
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
