import { useState, useEffect } from 'react';

import './App.css';

import { useActionMovies } from './hooks/useActionMovies';
import { Header } from './components/header/Header';
import { ListMovies } from './components/discover/ListMovies';

const API_URL = "https://movied.herokuapp.com/discover"

function App() {
  console.log('App is rendering!');
  const [movieList, setMovieList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [actionMovies] = useActionMovies(movieList);

  useEffect(() => {
    fetchMovies();
  }, [])

  async function fetchMovies () {
    const movies = await fetch(API_URL);
    const allMovies = await movies.json();
    const getMovies = allMovies.map(el => ({...el, stateButton: false}));
    setMovieList(getMovies);
  }

  const addToWishList = (movie) => {
    const copies = [...wishList];
    const filteredWishList = copies.filter((el)=> el.id !== movie.id);

    if(copies.find(el=> el.id === movie.id)) {
      setWishList(filteredWishList);
      setMovieList([...movieList].map(el => (el.id === movie.id) ? {...el, stateButton: false } : el));
    } else {
      setMovieList([...movieList].map(el => (el.id === movie.id) ? {...el, stateButton: true } : el));
      setWishList([...wishList, {...movie, stateButton: true }]);
    }
  }

  return (
    <div className="appContainer">
      <Header />
      <section className='moviesContainerList'>
        { wishList.length > 0 && (
          <ListMovies title="My List" allMovies={wishList} addMovie={(movie) => addToWishList(movie)} />
        )}

        <ListMovies title="Discover" allMovies={movieList} addMovie={(movie) => addToWishList(movie)} />

        <ListMovies title="Action" allMovies={actionMovies} addMovie={(movie) => addToWishList(movie)} />
      </section>
    </div>
  );
}

export default App;
