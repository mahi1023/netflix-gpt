import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const useMovieList = () => {
  // fetching data from TMDB APi and updating redux store
  const dispatch = useDispatch();

  // checking wether the popular movies is there in store or not
  const nowPlayingMovies = useSelector(
    (store) => store.movieList?.nowPlayMovies
  );

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_Options
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
};

export default useMovieList;
