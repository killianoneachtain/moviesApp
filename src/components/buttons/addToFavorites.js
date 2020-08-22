import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import {UpcomingMoviesContext} from "../../contexts/upcomingMoviesContext";

const AddToFavoriteButton = ({ movie }) => {
  const context = useContext(MoviesContext, UpcomingMoviesContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavorites(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavorite}
    >
      Add to Favorites
    </button>
  );
};

export default AddToFavoriteButton;