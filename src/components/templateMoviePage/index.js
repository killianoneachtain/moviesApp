import React from "react";
import MovieHeader from '../headerMovie'
import "./moviePage.css";
import AddToFavoritesButton from '../buttons/addToFavorites';

const TemplateMoviePage = ({ movie, children }) => {
  return (
    <>
      <MovieHeader movie={movie} />
      <div className="row">
        <div className="col-3">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "../public/film-poster-placeholder.png"
            }
            className="movie"
            alt={movie.title}
          />  
          <div>
            action={movie => <AddToFavoritesButton movie={movie} /> } </div>         
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplateMoviePage;