import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview';
import {MoviesContext} from '../contexts/moviesContext';
import {UpcomingMoviesContext} from '../contexts/upcomingMoviesContext';

const FavoriteMoviesPage = props => {
  const context = useContext(MoviesContext,UpcomingMoviesContext);
  return (
    <html>
    <head>
      <title>Favorites</title>
    </head>
    <body>
    <MovieListPageTemplate
      movies={context.favorites}
      title={"Favorite Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />  
    </body>
  </html>  
  );
};

export default FavoriteMoviesPage;