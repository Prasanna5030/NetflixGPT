import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";


const useMovieTrailer=()=>{
    const URL="https://api.themoviedb.org/3/movie/466420/videos?language=en-US";

    const [trailerId, setTrailerId]=useState(null);
   
    const getMovieVideo= async (apiURL,options)=>{
        const response= await fetch(apiURL,options);
        const data= await response.json();
          const allTrailer =data.results.filter((movie)=>movie.type==="Trailer");
        const trailer = allTrailer.length ? allTrailer[0] : data.results[0];
        setTrailerId(trailer.key); // trailer key
        };
    useEffect(()=>{
        getMovieVideo(URL,API_OPTIONS);
    },[]);

};

export default useMovieTrailer;