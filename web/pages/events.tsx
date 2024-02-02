import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";
import { SeasonCard } from "@/components/season/SeasonCard";
import Head from "next/head";

export default function BuildsPage() {
  return (
    <>
      <Head>
        <title>Events @ WOSS Robotics</title>
      </Head>

      <Header
        title="⚒️ Builds / Past Robots"
        subtitle="6070 has been hard at work since 2016. Take a look at what we've
        built:"
      />

      <div className="flex flex-col space-y-7 items-center justify-center pr-10 pl-10">
        <Link href="/season/2023" legacyBehavior>
          <a>
            <SeasonCard
              title="Charged Up presented by Haas"
              subtitle="2023"
              bg="/season/6070-charged-up.png"
            />
          </a>
        </Link>

        <Link href="/season/2019" legacyBehavior>
          <a>
            <SeasonCard
              title="Destination: Deep Space"
              subtitle="2019"
              bg="/season/6070-destination-deep-space.jpg"
            />
          </a>
        </Link>

        <Link href="/season/2018" legacyBehavior>
          <a>
            <SeasonCard
              title="FIRST Power Up"
              subtitle="2018"
              bg="/season/6070-power-up.png"
            />
          </a>
        </Link>

        <Link href="/season/2017" legacyBehavior>
          <a>
            <SeasonCard
              title="FIRST Steamworks"
              subtitle="2017"
              bg="/season/6070-steamworks.jpg"
            />
          </a>
        </Link>

        <Link href="/season/2016" legacyBehavior>
          <a>
            <SeasonCard
              title="FIRST Stronghold"
              subtitle="2016"
              bg="/season/6070-stronghold.jpg"
            />
          </a>
        </Link>
      </div>
      <Footer />
    </>
  );
}
