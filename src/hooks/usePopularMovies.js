import React, { useEffect } from 'react'
import { addPopularMovies } from '../Utils/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../Utils/Constant';

const usePopularMovies = () => {
    // Fetch Data from TMDB API and update store
    const dispatch = useDispatch();
  
    const popularMovies = useSelector((store) => store.movies.popularMovies);
  
    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
      console.log("hello");
      console.log(json.results);
    };
  
    useEffect(() => {
      !popularMovies && getPopularMovies();
    }, []);
  };
  
  export default usePopularMovies;