import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video pt-[20%] px-16 absolute bg-gradient-to-r from-black text-white'>
            <h2 className='text-6xl font-bold '>{title}</h2>
            <p className='py-6 text-lg w-1/4 text-xs'>{overview}</p>
            <div className=''>
                <button className='bg-white p-2 px-6 text-lg text-black rounded-lg hover:bg-opacity-80'>
                    Play</button>
                <button className='bg-gray-500 p-2 px-6 mx-2 text-lg text-white rounded-lg hover:bg-opacity-80'>More</button>
            </div>
        </div>
    )
}

export default VideoTitle