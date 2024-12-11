import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_LOGO } from '../Utils/Constant'

const GPTSearch = () => {
  return (
    <div>
      <div className=' absolute -z-10'>
     <img className='w-screen object-cover' src={BG_LOGO}
      alt='Logo'/>
     </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GPTSearch
