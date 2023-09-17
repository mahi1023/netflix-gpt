import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";

const useTopRated = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
        getTopRatedMovies();
    },[]);

     const getTopRatedMovies = async() => {
       const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_Options);
       const topRatedList = await data.json();
       dispatch(addTopRatedMovies(topRatedList.results));
     }
}

export default useTopRated;