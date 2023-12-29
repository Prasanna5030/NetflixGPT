import { useDispatch } from "react-redux";
import { addTopRatedMovies, addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useUpcomingMovies=()=>{
const dispatch=useDispatch({});

const URL="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
 const getUpcomingMovies= async(api_URL, options)=>{
   const response = await fetch(api_URL,options);
   const data=await response.json();
   dispatch(addUpcomingMovies(data.results));
 }

 useEffect(()=>{
    getUpcomingMovies(URL,API_OPTIONS);
 },[]);
}

export default useUpcomingMovies;