import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movieList);
 
 
  // console.log(movies);
  return (
    (movies.nowPlayMovies && movies.popularMovies && movies.topRatedMovies && movies.upcomingMovies) && (
    <div className=' bg-black'>
      <div className=' -mt-52 pl-12 relative z-20'>
      <MovieList title = {"Now Playing"}
        movies= {movies.nowPlayMovies}
      />
      
       <MovieList title = {"Up Coming"}
        movies= {movies.upcomingMovies}
      />
       <MovieList title = {"Popular"}
        movies= {movies.popularMovies}
      />
       <MovieList title = {"Top Rated movies"}
        movies= {movies.topRatedMovies}
      />
      </div>
        {/* 
        
        movielist = popular
            -movieCard*n
         movielist = now playing
          movielist = trending
           movielist = horror
        */}
    </div>
    )
  )
}

export default SecondaryContainer