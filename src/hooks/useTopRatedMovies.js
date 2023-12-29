import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies=()=>{
const dispatch=useDispatch({});

const URL="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
 const getTopRatedMovies= async(api_URL, options)=>{
   const response = await fetch(api_URL,options);
   const data=await response.json();
   dispatch(addTopRatedMovies(data.results));
 }

 useEffect(()=>{
    getTopRatedMovies(URL,API_OPTIONS);
 },[]);
}

export default useTopRatedMovies;