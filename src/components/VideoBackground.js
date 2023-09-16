import { useSelector } from "react-redux";
import useTrailerVideo from "../customHooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  
 //using custom hook to make call to tralier api
  useTrailerVideo(movieId);

  //using redux store to store the movieId
  const trailerId = useSelector((store) => store.movieList?.trailerVideo);

  return (
    <div className=" w-screen">
      <iframe
        className=" w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerId?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
