import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
        <>
        <div className=" w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-5xl  font-medium mb-2 ">{title}</h1>
        <p className="text-lg w-1/3">{overview}</p>
        
        <div>
        <button className="bg-white text-black p-2  px-10 m-2 rounded-sm hover:bg-opacity-50 "><div className='flex'><img className='w-4 h-4 m-1' src="https://www.svgrepo.com/show/31380/play-button.svg" alt="playbutton"/><span>Play</span></div></button>
        <button className=" bg-gray-700 text-white p-2  px-8 m-2 rounded-sm hover:bg-opacity-50 "><div className='flex'><img className='w-4 h-4 m-1' src="https://cdn.iconscout.com/icon/free/png-256/free-info-3604306-3004164.png" alt="playbutton"/><span>More Info</span></div></button>

        </div>
        </div>
        </>

    )
}

export default VideoTitle