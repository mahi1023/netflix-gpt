import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movieList',
    initialState:{
        nowPlayMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies : (state,actions) =>{
            state.nowPlayMovies = actions.payload;
        },
        addTrailerVideo: (state,action) => 
        {
            state.trailerVideo =  action.payload;
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer