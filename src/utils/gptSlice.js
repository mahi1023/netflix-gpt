import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGptSearch: false,
    gptMovies:null,
    movieNames:null

  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGPTMovieResult:(state,action)=>{
        const { movieNames,movieResults} = action.payload;
        state.movieNames = movieNames;
        state.gptMovies = movieResults;
    },
    clearGPTMovies:(state,action)=>{
        const { movieNames,movieResults} = action.payload;
        state.movieNames = movieNames;
        state.gptMovies = movieResults;
    }
  },
});

export const { toggleGptSearchView ,addGPTMovieResult , clearGPTMovies } = gptSlice.actions;
export default gptSlice.reducer;
