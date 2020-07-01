import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'

const MovieListPage = () => {
  const context = useContext(MoviesContext); //Gives access to all components

  return (
      <PageTemplate 
        title='All Movies'
        movies={context.movies}
        buttonHandler={context.addToFavorites}
      />
  );
};

export default MovieListPage;