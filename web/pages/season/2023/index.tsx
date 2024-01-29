import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Season } from "@/components/season/Season";
import { useState } from "react";
import { GameRevealScreen2023 } from "@/components/screens/season/2023/GameRevealScreen";
import { EventsScreen2023 } from "@/components/screens/season/2023/EventsScreen";
import { RobotsScreen2023 } from "@/components/screens/season/2023/RobotsScreen";
import { TabButton } from "@/components/TabButton";

export default function Season2023() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <Header title="Charged Up presented by Haas" season="2023" />

      <div className="flex flex-wrap items-center justify-center gap-4 mb-2 mt-[-15px]">
        <TabButton active={activeTab} tab={1} onClick={() => handleTabClick(1)}>
          <span className="mr-2">🎮</span> Game Reveal
        </TabButton>
        <TabButton active={activeTab} tab={2} onClick={() => handleTabClick(2)}>
          <span className="mr-2">🤖</span> Robots
        </TabButton>
        <TabButton active={activeTab} tab={3} onClick={() => handleTabClick(3)}>
          <span className="mr-2">🎉</span> Events
        </TabButton>
      </div>

      <Season
        title="Intercontinental Ballistic Mini Me"
        manual="https://firstfrc.blob.core.windows.net/frc2023/Manual/2023FRCGameManual.pdf"
        code="https://github.com/gryphonmachine/2023"
        isSeason={true}
      >
        {activeTab === 1 && <GameRevealScreen2023 />}
        {activeTab === 2 && <RobotsScreen2023 />}
        {activeTab === 3 && <EventsScreen2023 />}
      </Season>

      <Footer />
    </>
  );
}
