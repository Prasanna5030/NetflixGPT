import React from 'react'
import { IMG_CDN } from '../utils/constants'

const Moviecard = ({posterPath}) => {

  if(!posterPath) return null;
  return (
    <div className="">
    
    <img alt="movie_img" src={IMG_CDN + posterPath} className='custom aspect-auto max-w-max px-2 h-44 my-2 ' />
              
    
    </div>
 
  )
}

export default Moviecard