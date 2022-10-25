// import { useState } from 'react';
import './SingleMovie.css';

import add from '../../assets/btn-add.svg';
// import added from '../../assets/btn-added.svg';

export const SingleMovie = (props) => {

  return (
    <div className = "movie-container" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w300/${props.movie.backdrop_path}")` }}>
      <div className='movieInfo'>
        <p className='titleMovie'>{props.movie.title}</p>
        <img src={add} alt="Add Button" />
      </div>
    </div>
  )
}
