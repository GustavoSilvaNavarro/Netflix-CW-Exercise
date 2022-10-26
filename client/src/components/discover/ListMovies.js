import './ListMovies.css';

import { SingleMovie } from '../movie/SingleMovie';

export const ListMovies = ({ title, allMovies, addMovie }) => {
  console.log('List Movie render');
  return (
    <div className='listMovies__container'>
      <h2 className='listTitleMovies'>{title}</h2>

      <div className="listMovie__container">
        {allMovies.map(movie => (
          <SingleMovie key={movie.id} movie={movie} addMovie={() => addMovie(movie)} />
        ))}
      </div>
    </div>
  )
}
