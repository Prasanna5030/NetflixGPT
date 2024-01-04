import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

    const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
    const popularMovies = useSelector((store) => store?.movies?.popularMovies);
    const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);
    const upComingMovies = useSelector((store) => store?.movies.upcomingMovies);



   
    return movies && (
        <div className="bg-black">
            <div className="relative z-20 -mt-20 md:-mt-52">

                <Movielist title={"Now Playing"} movies={movies} />

                <Movielist title={"Top Rated"} movies={topRatedMovies} />

                <Movielist title={"Upcoming Movies"} movies={upComingMovies} />
                <Movielist title={"Adventure & Fun "} movies={topRatedMovies} />


                <Movielist title={"Popular"} movies={popularMovies} />




            </div>

        </div>
    )
}

export default SecondaryContainer