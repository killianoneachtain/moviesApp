import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import {UpcomingMoviesContext} from '../contexts/upcomingMoviesContext';
import AddUpcomingToFavoritesButton from '../components/buttons/addUpcomingToFavorites';


const MovieListPage = () => {
  const context = useContext(UpcomingMoviesContext);

  return (
      <PageTemplate 
        title='Upcoming Movies'
        movies={context.movies}
  action={movie => <AddUpcomingToFavoritesButton movie={movie} /> } // Render prop => Add To Favourites Button Displayed
      />
  );
};
export default MovieListPage;

