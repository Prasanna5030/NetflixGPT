import React from 'react'
import { bg_img } from '../utils/constants'
import Inputsearch from './Inputsearch'
import GptMovieSuggestions from './GptMovieSuggestions'
const Gptsearch = () => {
  return (
    <>
    <img src={bg_img} alt="bg-img" className="h-screen object-cover absolute -z-10 brightness-50  md:hidden"/>

    <div className='pt-[30%] md:pt-0'>
    <img src={bg_img} alt="bg-img" className="h-max md:fixed -z-10 brightness-50 hidden md:flex "/>


    <Inputsearch />
    <GptMovieSuggestions />
    </div>
  </>
  )
}

export default Gptsearch