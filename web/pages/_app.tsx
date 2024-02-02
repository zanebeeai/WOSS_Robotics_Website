import "@/styles/globals.css";
import "@/styles/zoom.css";
import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, user-scalable=0"
        />
        <meta property="og:title" content="WOSS Robotics" />
      <meta property="og:description" content="VEX 2106 & EV 843 @ White Oaks Secondary School" />
      // <meta property="og:image" content="URL_to_your_image" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
