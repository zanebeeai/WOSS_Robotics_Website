import Head from "next/head";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { GeneralScreen } from "@/components/screens/about/General";
import { CaptainsScreen } from "@/components/screens/about/Captains";
import { TabButton } from "@/components/TabButton";
import { RegisterScreen } from "@/components/screens/about/Register";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <Head>
        <title>About WOSS Robotics</title>
      </Head>

      <Header
        title="💬 About Us"
        subtitle="Why do we exist? VEX 2106 & EV 843"
      />

      <div className="flex flex-wrap items-center justify-center gap-4 mb-8 mt-[-15px]">
        <TabButton active={activeTab} tab={1} onClick={() => handleTabClick(1)}>
          <span className="mr-2">🤔</span> General
        </TabButton>
        <TabButton active={activeTab} tab={2} onClick={() => handleTabClick(2)}>
          <span className="mr-2">👥</span> Mentors & Captains
        </TabButton>
        <TabButton active={activeTab} tab={3} onClick={() => handleTabClick(3)}>
          <span className="mr-2">☄️</span> Join Us
        </TabButton>
      </div>

      <div className="flex items-center justify-center pr-5 pl-5">
        {activeTab === 1 && <GeneralScreen />}
        {activeTab === 2 && <CaptainsScreen />}
        {activeTab === 3 && <RegisterScreen />}
      </div>

      <Footer />
    </>
  );
}
