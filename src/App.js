import React, { useEffect, useState } from "react";

//api key 5fb2de50
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// const API_URL = "http://www.omdbapi.com?apikey=5fb2de50";
const API_URL = "http://localhost:4000/api/todos";

function App() {
  const [todos, setTodos] = useState([]);

  const [search, setSearch] = useState('');

  const searchTodos = async (id) => {
    const responses = await fetch(`${API_URL}`);
    const data = await responses.json();
    console.log(data.data)
    setTodos(data.data);
  };

  useEffect(() => {
    searchTodos();
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search movie"
          value={search}
          onChange={(e) => { setSearch(e.target.value); }}
        />
        <img src={SearchIcon} alt="Search" onClick={() => { searchTodos(search); }} />

      </div>
      {
        todos?.length > 0 ? (<div className="container">
          {
            todos.map((todo, index) => (
              <MovieCard key={index} todo={todo} />
            ))
          }

        </div>) : (
          <div className="empty">
            <h2>No todos found</h2>
          </div>
        )
      }



    </div>
  );
}

export default App;
