import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Team FRC 6070 from Glenforest Secondary School"
        />
        <meta
          name="keywords"
          content="frc,robotics,6070,mississauga,ontario,peel,pdsb"
        />
        <meta name="og:title" content="Team 6070" />
        <meta
          name="og:description"
          content="Team FRC 6070 from Glenforest Secondary School"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Team 6070" />
        <meta
          name="twitter:description"
          content="Team FRC 6070 from Glenforest Secondary School"
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
