import React from 'react';
import lang from './utils/languageConstants';
import { useSelector } from 'react-redux';
const GptSearchBar = () => {
const langKey = useSelector(store => store.config.lang)

  return (
    <div className='flex justify-center'>     
        <form className='mt-[10%] bg-black  grid-cols-12'>
            <input  type='text' placeholder=  {lang[langKey].gptSearchPlaceholder} className='col-span-9 p-2 m-4'/>
            <button className='col-span-3 p-2 bg-red-400 text-white  rounded-lg' >
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar