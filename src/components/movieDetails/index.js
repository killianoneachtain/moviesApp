import React from "react";
import "./movieDetails.css";

export default ({ movie }) => {
  return (
    <>
      <h3>"<em>{movie.tagline}</em>"</h3>
      <h3>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-success" role="progressbar" 
          aria-valuenow={movie.popularity} aria-valuemin="0" aria-valuemax="100">
          </div>
        </div>        
      </h3>
      <h5>Average Score: {movie.vote_average}</h5>
      <h4>Overview</h4>
      <p>{movie.overview}</p>
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Runtime (min.)
        </li>
        <li key="rut" className="list-group-item ">
          {movie.runtime}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Release Date
        </li>
        <li key="rdv" className="list-group-item ">
          {movie.release_date}
        </li>        
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="gh" className="list-group-item list-group-item-dark">
          Genres
        </li>
        {movie.genres.map(g => (
          <li key={g.name} className="list-group-item">
            {g.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="slh" className="list-group-item list-group-item-dark">
          Spoken Languages
        </li>
        {movie.spoken_languages.map(lang => (
          <li key={lang.name} className="list-group-item">
            {lang.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
          Production Companies
        </li>
        {movie.production_companies.map(pc => (
          <li key={pc.name} className="list-group-item">
            {pc.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pco" className="list-group-item list-group-item-dark">
          Production Countries
        </li>
        {movie.production_countries.map(pco => (
          <li key={pco.name} className="list-group-item">
            {pco.name}
          </li>
        ))}
      </ul>
    </>
  );
};