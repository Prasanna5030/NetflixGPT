import React from 'react'
import Moviecard from './Moviecard'
import { IMG_CDN } from '../utils/constants';
import  "../index.css";

const Movielist = ({ title, movies }) => {
    return (
        <div className=" ">

            <h1 className=" text-white text-xl first-letter ml-4">{title}</h1>
        
            <div className="flex overflow-x-scroll example">

            <div className="flex aspect-auto w-auto my-4 ml-2 ">
                {
                    movies?.map((movie) => {
                        return <Moviecard key={movie.id} posterPath={movie.poster_path} />
                    })
                }
            </div>
        </div>
        </div>
    )
}

export default Movielist