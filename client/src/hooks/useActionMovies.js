import { useState, useEffect } from 'react'

export const useActionMovies = (movieList) => {
  const [movieListAction, setMovieListAction] = useState([]);

  useEffect(() => {
    const movieActions = movieList.filter(el => el.genre_ids.includes(28));
    setMovieListAction(movieActions);
  }, [movieList]);

  return [movieListAction]
}
