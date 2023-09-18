import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';
import gptSearchReducer from './gptSlice';
import configReducer from './configSlice'
const userStore = configureStore({
        reducer:{
            user:userReducer,
            movieList:moviesReducer,
            gptSearch:gptSearchReducer,
            config:configReducer
        }
})

export default  userStore;