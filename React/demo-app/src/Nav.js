import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  console.log(movies);
  return (
    <nav>
      {/* <h2>DANNY</h2>
      <p>Number of movies: {movies.length}</p> */}
    </nav>
  );
};

export default Nav;
