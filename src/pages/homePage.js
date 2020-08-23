import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const MovieListPage = () => {
  const context = useContext(MoviesContext);

  return (
    <html>
    <head>
      <title>Home : Welcome to Movies</title>
    </head>
    <body>
      <PageTemplate 
        title='All Movies'
        movies={context.movies}
        action={movie => <AddToFavoritesButton movie={movie} /> } // Render prop => Add To Favourites Button Displayed
      /></body>
  </html>
  );
};

export default MovieListPage;