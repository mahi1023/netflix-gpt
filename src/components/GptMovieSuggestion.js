import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { gptMovies, movieNames } = useSelector((store) => store.gptSearch);
  if (!movieNames) return null;

  return <div className="p-4 m-4 bg-black text-white bg-opacity-90">
    <div>
        {movieNames.map((movieName,i)=>{ return <MovieList key={movieName} title={movieName} movies={gptMovies[i]}/>})}
   
    </div>
  </div>;
};

export default GptMovieSuggestion;
