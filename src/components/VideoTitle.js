import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen  aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block w-1/4 py-6 text-lg'>{overview}</p>
        <div className='my-4 md:m-0'>
            <button className='py-2 px-8 md:py-3 md:px-10 bg-white text-black font-bold  rounded-md text-center text-lg hover:bg-opacity-80 '>▶Play</button>
            <button className='hidden md:inline-block mx-2 p-3 px-10 bg-gray-500 text-white font-bold rounded-md text-center text-lg bg-opacity-50 hover:bg-opacity-80 '>ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle