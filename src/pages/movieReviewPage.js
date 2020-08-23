import React from "react";
import PageTemplate from '../components/templateMoviePage'
import MovieReview from "../components/movieReview";

const MovieReviewPage = (props) => {
  return (
    <html>
          <head>
            <title>{props.location.state.movie.title}</title>
          </head>
          <body>
      <PageTemplate movie={props.location.state.movie}>
        <MovieReview review={props.location.state.review} /> 
      </PageTemplate>
      </body>
      </html>
  );
};

export default MovieReviewPage;