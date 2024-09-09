import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

const movies = useSelector((store) => store.movies?.nowPlayingMovies);

if (movies === null) return;

const mainMovie = movies[0];



  return (
    <div>
        <VideoTitle title={mainMovie.original_title} overview={mainMovie.overview}/>
        <VideoBackground movieId={mainMovie.id}/>
    </div>
  )
}

export default MainContainer