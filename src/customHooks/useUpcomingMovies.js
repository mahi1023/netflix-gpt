import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { useSelector } from "react-redux";

const useUpcomingMovie = () => {
  const dispatch = useDispatch();
  // checking wether the popular movies is there in store or not
  const upcomingMovies = useSelector(
    (store) => store.movieList?.upcomingMovies
  );
  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_Options
    );
    const topUpcomingList = await data.json();
    dispatch(addUpcomingMovies(topUpcomingList.results));
  };
};

export default useUpcomingMovie;
