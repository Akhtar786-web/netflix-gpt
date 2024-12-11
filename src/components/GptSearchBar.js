import React from 'react'
import lang from '../Utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang)
  return (
    <div className='pt-[10%] justify-center flex'>
      <form className='w-1/2 bg-black grid grid-cols-12'>
        <input type="text" className='p-4 m-4 col-span-6' placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'>
            {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
