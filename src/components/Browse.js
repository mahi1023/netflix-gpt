
import Header from "./Header";
import useMovieList from "../customHooks/useMovieList";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRated from "../customHooks/useTopRated";
import useUpcomingMovie from "../customHooks/useUpcomingMovies";

const Browse = () => {
    // using useMovieList() hook to get movies from api
   useMovieList();
   usePopularMovies();
   useTopRated();
   useUpcomingMovie();
  return (
    <div>
      <Header />
      {/* 
        main video section
            - videoBackground
            - VideoTitle
        movie List section
            - movieList * n
                - movie cards * n
      */}
    <MainContainer/>
    <SecondaryContainer/>
    </div>
  );
};
export default Browse;
