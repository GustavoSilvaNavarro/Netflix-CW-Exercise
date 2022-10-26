import { useState, useEffect } from 'react';
import './SingleMovie.css';

import add from '../../assets/btn-add.svg';
import added from '../../assets/btn-added.svg';

export const SingleMovie = (props) => {
  const [movieAdded, setMovieAdded] = useState(props.movie.stateButton);

  useEffect(() => {
    setMovieAdded(props.movie.stateButton);
  }, [props.movie]);

  const handleClick = () => {
    props.addMovie();
    setMovieAdded(!movieAdded);
  }

  return (
    <div className = "movie-container" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w300/${props.movie.backdrop_path}")` }}>
      <div className='movieInfo'>
        <p className='titleMovie'>{props.movie.title}</p>
        <img onClick={handleClick} src={!movieAdded ? add : added } alt="Add Button" />
      </div>
    </div>
  )
}
