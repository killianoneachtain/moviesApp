import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import useMovie from "../hooks/useMovie";
import CastCrew from "../components/cast";
import Crew from "../components/crew";
import Similar from "../components/similar";

const MoviePage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id);
  
  return (
    <>
    {movie ? (
      <>
        <html>
          <head>
            <title>{movie.title}</title>
          </head>
          <body>
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
        </PageTemplate>

        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/castcredits") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/castcredits`}
              >
                Show Cast
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Cast 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/castcredits`}
          render={props => <CastCrew movie={movie} {...props} />}
        />

        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/crewcredits") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/crewcredits`}
              >
                Show Crew
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Crew 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/crewcredits`}
          render={props => <Crew movie={movie} {...props} />}
        />

        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        />

        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/similar") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/similar`}
              >
                Show Similar Movies
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Similar Movies 
              </Link>
            )}
          </div>
        </div></body>
        </html>
        <Route
          path={`/movies/:id/similar`}
          render={props => <Similar movie={movie} {...props} />}
        />
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};

export default withRouter(MoviePage);