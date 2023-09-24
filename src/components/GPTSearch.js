import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACKGROUND_IMG } from '../utils/constants'

const GPTSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
        <img
          className="h-screen object-cover"
          src={BACKGROUND_IMG}
          alt="logo"
        />
      </div>
    <div className=''>
         
        {/* 
        Gpt Search Bar
        Gpt Movie suggestions
        */}
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
    </>
  )
}

export default GPTSearch