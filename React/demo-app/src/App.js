import React from "react";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieContext } from "./MovieContext";
import { MovieProvider } from "./MovieContext";

const App = () => {
  return (
    <MovieProvider>
      <div>
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
};

export default App;
