import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage';
import {UpcomingMoviesContext} from '../contexts/upcomingMoviesContext';
//import AddToFavoritesButton from '../components/buttons/addtoFavorites';

const MovieListPage = () => {
  const context = useContext(UpcomingMoviesContext);

  return (
      <PageTemplate 
        title='Upcoming Movies'
        movies={context.movies}
  action={movie => <div></div>  } // Render prop => Add To Favourites Button Displayed
      />
  );
};
export default MovieListPage;

