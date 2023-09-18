import Header from "./Header";
import useMovieList from "../customHooks/useMovieList";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRated from "../customHooks/useTopRated";
import useUpcomingMovie from "../customHooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const searchToggle = useSelector((store) => store.gptSearch?.showGptSearch);

  // using useMovieList() hook to get movies from api
  useMovieList();
  usePopularMovies();
  useTopRated();
  useUpcomingMovie();

  return (
    <div>
      <Header />
      {searchToggle ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      {/* 
        main video section
            - videoBackground
            - VideoTitle
        movie List section
            - movieList * n
                - movie cards * n
      */}
    </div>
  );
};
export default Browse;
