import { addTrailerVideo } from "../utils/moviesSlice";
import React, { useEffect, useState } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  //fetch trailer video from movie api from tmbd
  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-U`,
      API_Options
    );

    const json = await data.json();
    const filterData = json.results.filter((obj) => obj.type === "Trailer");

    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
};

export default useTrailerVideo;
