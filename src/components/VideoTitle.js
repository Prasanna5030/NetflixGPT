import React from 'react'

const VideoTitle = ({title, overview}) => {
  const handlebutton=()=>{
    alert("Please Subscribe to Netflix to watch movies.")
  }
  return (
        <>
        <div className=" w-screen aspect-video pt-[15%] p-2 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="md:text-5xl  font-medium mb-2 ">{title}</h1>
        <p className="hidden md:inline-block text-lg w-1/3">{overview}</p>
        
        <div>
        <button onClick={handlebutton} className="bg-white text-black md:p-2 px-2 md:px-10 m-2 rounded-sm hover:bg-opacity-50 "><div className='flex'><img className='w-4 h-4 m-1' src="https://www.svgrepo.com/show/31380/play-button.svg" alt="playbutton"/><span>Play</span></div></button>
        <button onClick={handlebutton} className="hidden md:inline bg-gray-700 text-white md:p-2  px-2 md:px-8 m-2 rounded-sm hover:bg-opacity-50 "><div className='flex'><img className='w-4 h-4 m-1' src="https://cdn.iconscout.com/icon/free/png-256/free-info-3604306-3004164.png" alt="playbutton"/><span>More Info</span></div></button>

        </div>
        </div>
        </>

    )
}

export default VideoTitle