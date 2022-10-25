import { useState, useEffect } from "react";

import './ListMovies.css';

import { SingleMovie } from '../movie/SingleMovie';

const API_URL = "https://movied.herokuapp.com/discover"

export const ListMovies = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, [])

  async function fetchMovies () {
    const movies = await fetch(API_URL);
    const allMovies = await movies.json();
    setMovieList(allMovies);
  }

  return (
    <div className="listMovie__container">
      {movieList.map(movie => (
        <SingleMovie key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
