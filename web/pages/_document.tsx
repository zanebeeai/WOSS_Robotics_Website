import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="VEX 2106 & EV 843 @ White Oaks Secondary School"
        />
        <meta
          name="keywords"
          content="vex,electrathon,electric vehicle,robotics,2106,843,oakville,ontario,halton,hdsb"
        />
        <meta name="og:title" content="WOSS Robotics" />
        <meta
          name="og:description"
          content="VEX 2106 & EV 843 @ White Oaks Secondary School"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WOSS Robotics" />
        <meta
          name="twitter:description"
          content="VEX 2106 & EV 843 @ White Oaks Secondary School"
        />
        <meta name="twitter:image" content="/meta-img.png" />
        <meta name="theme-color" content="#FBBB04" />
        <link rel="shortcut icon" href="/yellowWildcatsLogo.png" />
        <meta name="og:image" content="/meta-img.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
