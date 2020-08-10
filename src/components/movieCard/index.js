import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieCard = ({movie, action}) => {

  return (
    <div className="col-sm-3">
      <div class="card">      
      <Link to={`/movies/${movie.id}`}>
        <img
          class="card-img-top center "
          alt={movie.title}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "../film-poster-placeholder.png"
          }
        />
        </Link>
        <div class="card-body">
          <h3 class="card-title">{movie.title}</h3>     
          <div class="card-footer">
       <p class="card-text">
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span class="card-text"> {movie.release_date}</span>
            </p>
          <p class="card-text">
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span class="card-text"> {movie.vote_average}</span>
          </p>
           {action(movie)}  
           </div>
        </div>
        </div>
        </div>
  );
};

export default MovieCard;