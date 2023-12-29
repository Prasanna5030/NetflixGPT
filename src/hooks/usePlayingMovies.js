import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const usePlayingMovies=()=>{
const dispatch=useDispatch({});

const URL="https://api.themoviedb.org/3/movie/now_playing?page=1";
 const getNowPlayingMovies= async(api_URL, options)=>{
   const response = await fetch(api_URL,options);
   const data=await response.json();
   dispatch(addNowPlayingMovies(data.results));
 }

 useEffect(()=>{
 getNowPlayingMovies(URL,API_OPTIONS);
 },[]);
}

export default usePlayingMovies;