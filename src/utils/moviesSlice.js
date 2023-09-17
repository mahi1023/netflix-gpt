import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movieList',
    initialState:{
        nowPlayMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null
    },
    reducers:{
        addNowPlayingMovies : (state,actions) => {
            state.nowPlayMovies = actions.payload;
        },
        addTrailerVideo: (state,action) => 
        {
            state.trailerVideo =  action.payload;
        },
        addPopularMovies:(state,action) => {
            state.popularMovies =action.payload;
        },
        addTopRatedMovies:(state,action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies:(state,action) =>{
            state.upcomingMovies = action.payload;
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideo, addPopularMovies, addTopRatedMovies,addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer