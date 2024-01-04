import React, { useRef } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstants'
import openai from '../utils/openai'
import { addGptMovieResults} from '../utils/gptSlice'

const Inputsearch = () => {
    const langName=useSelector(store=>store.config.lang)
    const search= useRef(null);
    const dispatch=useDispatch();

    const searchMovieTmdb=async (movie)=>{
      const data=await fetch('https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1', API_OPTIONS)
      const response =await data.json();
      return response.results ;
    }

    const handleGptSearchClick=  async ()=>{
      const gptQuery ="Act as an movie recommendation system and suggest some movies for the query :"+search.current.value +". only give me the names of 5 movies, comma separated like example result given ahead. Example Result : Animal, Salaar, Don, RRR, Bahubali";   

      // On clicking the button , makes an api call to gpt api and get some movies
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      console.log(gptResults.choices?.[0].message.content);

      const gptMovies=gptResults.choices?.[0].message.content.split(",");

      const promiseArr = gptMovies.map(movie => searchMovieTmdb(movie)); // returns the promise array

      const tmdbMovies= await Promise.all(promiseArr);

      console.log(tmdbMovies);

      dispatch(addGptMovieResults({movieNames: gptMovies , movieResults: tmdbMovies})); 
      
    }
  return (
    <div className='pt-[15%] flex justify-center '>

         <form className=' bg-black w-full md:w-1/2 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
         <input type='text' ref={search} className='p-4 m-2 col-span-10 rounded-lg text-black' name="searchMovies" placeholder={lang[langName].gptSearchPlaceholder} />
         <button className=" bg-red-600 col-span-2  md:p-4 m-2 rounded-lg text-white" onClick={handleGptSearchClick}> {lang[langName].search} </button>
         </form>  
    </div>
  )
}

export default Inputsearch