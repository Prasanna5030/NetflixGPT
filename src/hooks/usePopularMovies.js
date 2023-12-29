import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies=()=>{
const dispatch=useDispatch({});

const URL="https://api.themoviedb.org/3/movie/popular?page=1";
 const getPopularMovies= async(api_URL, options)=>{
   const response = await fetch(api_URL,options);
   const data=await response.json();
   dispatch(addPopularMovies(data.results));
 }

 useEffect(()=>{
 getPopularMovies(URL,API_OPTIONS);
 },[]);
}

export default usePopularMovies;