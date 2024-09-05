import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    console.log("movies", movies)
    return (
        <div className='p-6 bg-black'>
            <h1 className='text-3xl py-6 text-white'>{title}</h1>
            <div className='flex w-full overflow-x-scroll'>

                {movies &&
                    <div className='flex pr-4 w-20'>
                        {movies.map((movie) => (
                            <MovieCard posterPath={movie?.poster_path} />

                        ))
                        }
                    </div>}
            </div>
        </div>
    )
}

export default MovieList