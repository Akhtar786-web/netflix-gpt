import { addTrailerVideo } from '../Utils/moviesSlice';
import { API_OPTIONS } from '../Utils/Constant';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useTrailerVideo =(()=>{
    const dispatch = useDispatch();
   // const trailerId = useSelector((store)=>store.movies?.trailerVideo?.key);
    // fetch trailer Video from youtube
    const getMovieVideos = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/1241982/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        console.log(json);
        const FilterData = json.results.filter(video => video.type==="Trailer");
        const Trailer = FilterData.length? FilterData[0]:json.results[0];
        console.log(Trailer);
        //setTrailerId(Trailer.key)
        dispatch(addTrailerVideo(Trailer))
    }
    useEffect(()=>{
        getMovieVideos();
    },[]);
})
 

export default useTrailerVideo
