import React from 'react'
import Header from './Header';
import usePlayingMovies from '../hooks/usePlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import Gptsearch from './Gptsearch';

const Browse = () => {
  usePlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const gptSearch= useSelector(store => store.gpt.showGptSearch)

  return (
    <>
    <div className="flex justify-between">
    <Header /> 
    </div>
   
    <div>
    { gptSearch ? <Gptsearch /> :<> <MainContainer />
    <SecondaryContainer /></>}
    
    </div>
   
    </>
  )
}

export default Browse;