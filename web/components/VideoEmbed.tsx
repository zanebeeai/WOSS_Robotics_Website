interface Props {
  id: string;
  className?: string;
}

export const VideoEmbed = (props: Props) => {
  return (
    <div className={`${props.className} flex items-center justify-center mt-5 aspect-w-8 aspect-h-7`}>
      <iframe
        src={`https://www.youtube.com/embed/${props.id}?modestbranding=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg border-2 border-primary"
      ></iframe>
    </div>
  );
};
