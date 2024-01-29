import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Season } from "@/components/season/Season";
import { useState } from "react";
import { TabButton } from "@/components/TabButton";
import { EventsScreen2018 } from "@/components/screens/season/2018/EventsScreen";
import { GameRevealScreen2018 } from "@/components/screens/season/2018/GameRevealScreen";

export default function Season2018() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <Header title="FIRST Power Up" season="2018" />

      <div className="flex flex-wrap items-center justify-center gap-4 mb-2 mt-[-15px]">
        <TabButton active={activeTab} tab={1} onClick={() => handleTabClick(1)}>
          <span className="mr-2">🎮</span> Game Reveal
        </TabButton>
        <TabButton active={activeTab} tab={2} onClick={() => handleTabClick(2)}>
          <span className="mr-2">🎉</span> Events
        </TabButton>
      </div>

      <Season
        title="Pingu"
        manual="https://firstfrc.blob.core.windows.net/frc2018/Manual/2018FRCGameSeasonManual.pdf"
        code="https://github.com/FRC6070/2018Try2"
        isSeason={true}
      >
        {activeTab === 1 && <GameRevealScreen2018 />}
        {activeTab === 2 && <EventsScreen2018 />}
      </Season>

      <Footer />
    </>
  );
}
