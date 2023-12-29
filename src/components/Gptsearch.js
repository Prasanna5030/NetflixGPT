import React from 'react'
import { bg_img } from '../utils/constants'
import Inputsearch from './Inputsearch'
import GptMovieSuggestions from './GptMovieSuggestions'
const Gptsearch = () => {
  return (
    <div className=''>
    <img src={bg_img} alt="bg-img" className="h-max fixed -z-10 brightness-50 "/>

    <Inputsearch />
    <GptMovieSuggestions />
    </div>
  )
}

export default Gptsearch