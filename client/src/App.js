import { useState, useEffect } from 'react';

import './App.css';

import { Header } from './components/header/Header';
import { ListMovies } from './components/discover/ListMovies';

const API_URL = "https://movied.herokuapp.com/discover"

function App() {
  const [movieList, setMovieList] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, [])

  async function fetchMovies () {
    const movies = await fetch(API_URL);
    const allMovies = await movies.json();
    setMovieList(allMovies);
  }

  const addToWishList = (movie) => {
    const copies = [...wishList];
    const filteredWishList = copies.filter((el)=> el.id !== movie.id);

    if(copies.find(el=> el.id === movie.id)) {
      setWishList(filteredWishList);
    } else {
      setWishList([...wishList, movie]);
    }
  }

  return (
    <div className="appContainer">
      <Header />
      <section className='moviesContainerList'>
        { wishList.length > 0 && (
          <ListMovies title="My List" allMovies={wishList} />
        )}

        <ListMovies title="Discover" allMovies={movieList} addMovie={(movie) => addToWishList(movie)} />
      </section>
    </div>
  );
}

export default App;
