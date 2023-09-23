import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";
const usePopularMovies = () => {
  // fetching data from TMDB APi and updating redux store
  const dispatch = useDispatch();

  // checking wether the popular movies is there in store or not
  const popularMovies = useSelector((store) => store.movieList?.popularMovies);

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_Options
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
};

export default usePopularMovies;
