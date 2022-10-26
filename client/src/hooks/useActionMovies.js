import { useState, useEffect } from 'react'
import axios from 'axios';

export const useActionMovies = (movieList) => {
  const [movieListAction, setMovieListAction] = useState([]);

  useEffect(() => {
    const movieActions = movieList.filter(el => el.genre_ids.includes(28));
    setMovieListAction(movieActions);

    //! Example of CRUD with fetch
    tryConnection();

    async function tryConnection () {
      //* Fetch
      // const topics = await fetch('http://localhost:8080/topics');
      // const allTopics = await topics.json();
      // console.log(allTopics);

      //* Axios version
      const topics = await axios.get('http://localhost:8080/topics');
      console.log(topics.data);
    }

    // postSample();

    // async function postSample () {
      //* Fetch version
    //   await fetch('http://localhost:8080/topics', {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify({ title: 'Here in react' })
    //   })

      //* Axios version
    //   await axios.post('http://localhost:8080/topics', {
    //     title: 'This is Gustavo from React using axios'
    //   });
    // }

    // deleteTopic ();

    // async function deleteTopic () {
      //* Fetch Version
      // await fetch('http://localhost:8080/topics/63595e7c5259058e9fb37afc', {
      //   method: 'DELETE',
      // })

      //* Axios Version
    //   await axios.delete('http://localhost:8080/topics/6359944bc04a4a78fd53bd1d');
    // }

    // updateTopic ();

    // async function updateTopic() {
      //* Fetch Version
      // await fetch('http://localhost:8080/topics/63595e7c5259058e9fb37afa/up', {
      //   method: 'PUT',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-type': 'application/json'
      //   },
      //   body: JSON.stringify({ title: 'All Working dude', score: 39 })
      // })

      //* Axios Version
    //   await axios.put('http://localhost:8080/topics/6356b8800fc0aa67fee23d70/up', {
    //     score: 100
    //   });
    // }



  }, [movieList]);

  return [movieListAction]
}
