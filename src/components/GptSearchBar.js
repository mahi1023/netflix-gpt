import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  //getting selected language from store
  const language = useSelector((store) => store.config?.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      {/* 
        search box
        */}
      <form className="bg-black w-1/2 grid grid-cols-12 ">
        <input
          className="p-4 m-4 col-span-9 "
          type="text"
          placeholder={lang[language].gptSearchPlacheHolder}
        />
        <button className="py-2 m-4 px-4 bg-red-700 text-white rounded-lg col-span-3">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
