import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen  aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className=' text-6xl font-bold'>{title}</h1>
        <p className=' w-1/4 py-6 text-lg'>{overview}</p>
        <div className=''>
            <button className='p-3 px-10 bg-white text-black font-bold  rounded-md text-center text-lg hover:bg-opacity-80 '>▶Play</button>
            <button className='mx-2 p-3 px-10 bg-gray-500 text-white font-bold rounded-md text-center text-lg bg-opacity-50 hover:bg-opacity-80 '>ⓘ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle