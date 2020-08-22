import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import {UpcomingMoviesContext} from '../contexts/upcomingMoviesContext';
import AddToFavoritesButton from '../components/buttons/addToFavorites';


const MovieListPage = () => {
  const context = useContext(UpcomingMoviesContext);

  return (
      <PageTemplate 
        title='Upcoming Movies'
        movies={context.movies}
  action={movie => <AddToFavoritesButton movie={movie} /> } // Render prop => Add To Favourites Button Displayed
      />
  );
};
export default MovieListPage;

