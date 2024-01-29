import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Season } from "@/components/season/Season";
import { useState } from "react";
import { TabButton } from "@/components/TabButton";
import { GameRevealScreen2016 } from "@/components/screens/season/2016/GameRevealScreen";
import { EventsScreen2016 } from "@/components/screens/season/2016/EventsScreen";
import { MediaScreen2016 } from "@/components/screens/season/2016/MediaScreen";

export default function Season2016() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <Header title="FIRST Stronghold" season="2016" />

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
        title="Iron Curtain"
        manual="https://firstfrc.blob.core.windows.net/frc2016manuals/GameManual/FRC-2016-game-manual.pdf"
        code="https://github.com/FRC6070/FRC-6070-Updated-2016"
        isSeason={true}
      >
        {activeTab === 1 && <GameRevealScreen2016 />}
        {activeTab === 2 && <EventsScreen2016 />}
        {activeTab === 3 && <MediaScreen2016 />}
      </Season>

      <Footer />
    </>
  );
}
