import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist';

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector(store => store.gpt);

  if (!movieNames) return null;


  return (
    <div>
      <div className='p-4 m-4 bg-black text-white bg-opacity-80'>
        {movieNames.map((movie, index) => <Movielist key={movie} title={movie} movies={index} />
        )}
      </div>

    </div>
  )
}

export default GptMovieSuggestions