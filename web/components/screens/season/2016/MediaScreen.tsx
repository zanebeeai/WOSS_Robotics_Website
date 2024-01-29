import { Photo } from "@/components/Photo";
import { Title } from "@/components/Title";
import { VideoEmbed } from "@/components/VideoEmbed";
import Zoom from "react-medium-image-zoom";

export const MediaScreen2016 = () => {
  return (
    <>
      <Title>Media</Title>
      <VideoEmbed id="E-MpsOlM3U0" className="mb-5" />

      <div className="flex flex-col justify-center md:grid md:grid-cols-3 gap-4">
        <Zoom>
          <Photo className="hover:opacity-75" img="/season/2016/IMG_2983.jpg" />
        </Zoom>
        <Zoom>
          <Photo
            className="hover:opacity-75"
            img="/season/2016/IMG_3040-1.jpg"
          />
        </Zoom>
        <Zoom>
          <Photo className="hover:opacity-75" img="/season/2016/IMG_5505.jpg" />
        </Zoom>
      </div>
    </>
  );
};
