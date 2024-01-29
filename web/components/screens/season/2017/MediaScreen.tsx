import { Photo } from "@/components/Photo";
import { Title } from "@/components/Title";
import { VideoEmbed } from "@/components/VideoEmbed";
import Zoom from "react-medium-image-zoom";

export const MediaScreen2017 = () => {
  return (
    <>
      <Title>Media</Title>
      <VideoEmbed id="u3hDYpXdCBg" className="mb-5" />
      <div className="flex flex-col justify-center md:grid md:grid-cols-3 gap-4">
        <Zoom>
          <Photo
            className="hover:opacity-75"
            img="/season/2017/IMG_0742-1.jpg"
          />
        </Zoom>
        <Zoom>
          <Photo className="hover:opacity-75" img="/season/2017/IMG_0759.jpg" />
        </Zoom>
        <Zoom>
          <Photo className="hover:opacity-75" img="/season/2017/Eddy-G.jpg" />
        </Zoom>
      </div>
    </>
  );
};
