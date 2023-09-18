import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACKGROUND_IMG } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
         <div className="fixed -z-10">
        <img
          className=" "
          src={BACKGROUND_IMG}
          alt="logo"
        />
      </div>
        {/* 
        Gpt Search Bar
        Gpt Movie suggestions
        */}
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GPTSearch