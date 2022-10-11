import { useEffect, useState } from "react";
import Search from "./search.png"
import "./movies.css"
import Movies from "./Movies";
const API_URL = 'http://www.omdbapi.com?apikey=d87e7a1e'

function App() {
  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    if(!data){
      return(
        <h1>no movies found</h1>
      )
    }
    else{
    setMovies(data.Search)
    }
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, [])

  return (
    <div className="app">
      <h1>NetFlix Clone</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)} />
        <img src={Search} alt="search"
          onClick={() => searchMovies(searchItem)} />
      </div>
      <div className="container">
        {movies.map((movie,index) => (
          <Movies key={index} movie={movie} />
        ))}
      </div>
    </div>

  );
}

export default App;
