import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants';



// fetching the video from api 
const VideoBackground = ({movieId}) => {
    const URL="https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US";
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

  return (

<>
<div className="w-screen aspect-video">
<iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+trailerId+"?&autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
</div>
</>  )
}

export default VideoBackground