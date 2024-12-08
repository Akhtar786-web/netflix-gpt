import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store=> store.movies?.nowPlayingMovies);
    //console.log(movies);
    if(!movies) return ;
    const mainMovie = movies[0];
    console.log(mainMovie);

    const { original_title, overview, id } = mainMovie;

return (
    <div className="pt-[30%] bg-gray-500 md:pt-0 relative">
         <VideoTitle title={original_title} overview={overview} />
         <VideoBackground movieId={id} />

    </div>
  );
};
export default MainContainer;
