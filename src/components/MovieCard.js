import React from 'react'
import { IMG_CDN_URL } from './utils/Contants'

const MovieCard = ({posterPath}) => {
  return (
    <div>
        <img src = {IMG_CDN_URL+ posterPath} alt="movie card" />
    </div>
  )
}

export default MovieCard