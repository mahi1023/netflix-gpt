import React from 'react'
import { Img_CDN_URL } from '../utils/constants'
const MovieCard = ({posterPath}) => {
  return (
    
    <div className='w-44 pr-4'>
        <img src={Img_CDN_URL
        +posterPath} alt='movies'/>
    </div>
  )
}

export default MovieCard