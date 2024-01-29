import Image from "next/image";

interface Props {
  className: string;
  img: string;
}

export const Photo = (props: Props) => {
  return (
    <Image
      className={`rounded-lg ${props.className} border-2 border-primary hover:border-white`}
      width={1000}
      height={1000}
      src={props.img}
      alt="Season Photo"
      priority={true}
    />
  );
};
