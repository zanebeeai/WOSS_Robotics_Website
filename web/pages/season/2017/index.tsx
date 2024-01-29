import { Header } from "@/components/Header";
import { Season } from "@/components/season/Season";
import { Footer } from "@/components/Footer";
import { TabButton } from "@/components/TabButton";
import { useState } from "react";
import { GameRevealScreen2017 } from "@/components/screens/season/2017/GameRevealScreen";
import { EventsScreen2017 } from "@/components/screens/season/2017/EventsScreen";
import { MediaScreen2017 } from "@/components/screens/season/2017/MediaScreen";

export default function Season2017() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <Header title="FIRST Steamworks" season="2017" />

      <div className="flex flex-wrap items-center justify-center gap-4 mb-2 mt-[-15px]">
        <TabButton active={activeTab} tab={1} onClick={() => handleTabClick(1)}>
          <span className="mr-2">🎮</span> Game Reveal
        </TabButton>
        <TabButton active={activeTab} tab={2} onClick={() => handleTabClick(2)}>
          <span className="mr-2">🎉</span> Events
        </TabButton>
        <TabButton active={activeTab} tab={3} onClick={() => handleTabClick(3)}>
          <span className="mr-2">📸</span> Media
        </TabButton>
      </div>

      <Season
        title="Prattbot A.K.A Geary"
        manual="https://firstfrc.blob.core.windows.net/frc2017/Manual/2017FRCGameSeasonManual.pdf"
        code="https://github.com/FRC6070/2017SteamworksUpdated"
        isSeason={true}
      >
        {activeTab === 1 && <GameRevealScreen2017 />}
        {activeTab === 2 && <EventsScreen2017 />}
        {activeTab === 3 && <MediaScreen2017 />}
      </Season>

      <Footer />
    </>
  );
}
