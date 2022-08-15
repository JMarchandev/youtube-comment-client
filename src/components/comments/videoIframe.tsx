export const VideoIframe = ({ videoId }: { videoId: string }) => {
  return (
    <iframe
      className="mt-3"
      width="100%"
      height="300"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={`YouTube video player: ${videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
}

export default VideoIframe;