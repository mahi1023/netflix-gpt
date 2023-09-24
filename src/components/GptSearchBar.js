import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_Options } from "../utils/constants";
import { json } from "react-router";
import { useDispatch } from "react-redux";
import { addGPTMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const inputSearch = useRef(null);
  //getting selected language from store
  const language = useSelector((store) => store.config?.lang);
  const dispatch = useDispatch();

  const handleGPTserachCLick = async (e) => {
    const searchText = inputSearch.current.value;
    e.preventDefault();
    // Make an api call to GPT API and get movies list
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText +
      ". only give me names of 5 movies, comma separted like the  example result given ahead. Example Result: Gadar, Sholay, Don, Golmal, Koi Mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    
    if (!gptResults.choices) return <p>GPT Error</p>;

    //get top 5 movies from search
    console.log(gptResults.choices?.[0]?.message?.content);

    // now we convert them to array
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // For each movie search movie  search in TMDB API
    //it will return a promise
    const promisearray = gptMovies.map((movie) => {
      return searchMoviesTMDB(movie);
    });
    console.log(promisearray);

    const tmdbResult = await Promise.all(promisearray);
    console.log(tmdbResult);

    dispatch(
      addGPTMovieResult({
        movieNames: gptMovies,
        movieResults: tmdbResult,
      })
    );
  };

  //search movie in TMDB db
  //it will return a promise
  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_Options
    );
    const json = await data.json();
    return json.results;
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      {/* 
        search box
        */}
      <form className="bg-black w-full md:w-1/2 grid grid-cols-12 ">
        <input
          className="p-4 m-4 col-span-9 "
          type="text"
          ref={inputSearch}
          placeholder={lang[language].gptSearchPlacheHolder}
        />
        <button
          className="py-2 m-4 px-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGPTserachCLick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
