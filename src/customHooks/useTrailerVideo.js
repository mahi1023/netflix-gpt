import { addTrailerVideo } from "../utils/moviesSlice";
import React, { useEffect, useState } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  // checking wheterg the trailer is there in stor or not
  const nowPlayingMovies = useSelector(
    (store) => store.movieList?.trailerVideo
  );

  //fetch trailer video from movie api from tmbd
  useEffect(() => {
    !nowPlayingMovies && getMovieVideos();
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
