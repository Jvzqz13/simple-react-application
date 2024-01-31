import { useState, useEffect } from 'react'
import './App.css';

import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

function App() {
  //API KEY
  const apiKey = '2cb5861b';
  
  //State to hold movie data
  const [ movie, setMovie ] = useState(null);

  // Make fetch request and stores the response
  const getMovie = async(searchTerm) => {
    try { 
       const response = await fetch (
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    const data = await response.json();
    setMovie(data);

  } catch (e) {
    console.error(e);
  }

  };

  useEffect (() => { getMovie("Cluecless") },[]);


  return (
    <div className="App">

      
      <h1> Movie React </h1>
      
      {/* passed the getMovie function as a prop called moviesearch */}
      <Form moviesearch={getMovie} />

     {/* passed movie as props to movie display */}
      <MovieDisplay movie={movie} />

    </div>
  );
}

export default App;
