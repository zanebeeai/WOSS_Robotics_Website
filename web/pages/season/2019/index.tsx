import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Season } from "@/components/season/Season";
import { TabButton } from "@/components/TabButton";
import { useState } from "react";
import { GameRevealScreen2019 } from "@/components/screens/season/2019/GameRevealScreen";
import { EventsScreen2019 } from "@/components/screens/season/2019/EventsScreen";

export default function Season2019() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <Header title="Destination: Deep Space" season="2019" />

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
        manual="https://firstfrc.blob.core.windows.net/frc2019/Manual/2019FRCGameSeasonManual.pdf"
        isSeason={true}
      >
        {activeTab === 1 && <GameRevealScreen2019 />}
        {activeTab === 2 && <EventsScreen2019 />}
      </Season>

      <Footer />
    </>
  );
}
