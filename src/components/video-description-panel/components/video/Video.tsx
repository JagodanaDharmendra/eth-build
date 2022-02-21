import { IVideoProps } from ".";

function Video({ src, title }: IVideoProps) {
  return (
    <div className="max-w-3xl h-96 justify-center items-center content-center p-4">
      <iframe
        src={src}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        title={String(title)}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
}

export default Video;
