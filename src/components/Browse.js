import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

//import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  const ShowGptSearch = useSelector((store)=>store.gpt.showGptSearch)

  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header/>
      {
        ShowGptSearch ? (
          <GPTSearch/>
        ):(
          <>
           <MainContainer/>
           <SecondaryContainer/>

          </>
        )
      }
      
      
      
    </div>
  )
}
export default Browse;
