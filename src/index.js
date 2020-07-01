import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage';  // NEW Week 3
import MovieReviewPage from "./pages/movieReviewPage"; // New Week 4
import SiteHeader from './components/siteHeader'; // NEW Week 4 
import MoviesContextProvider from "./contexts/moviesContext"; // New Week 5
import GenresContextProvider from "./contexts/genresContext"; // New Week 5

const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader />      
        <div className="container-fluid">
            <MoviesContextProvider>
              <GenresContextProvider>
                <Switch>
                  <Route path="/reviews/:id" component={MovieReviewPage} />
                  <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                  <Route path="/movies/:id" component={MoviePage} />
                  <Route path="/" component={HomePage} />          
                  <Redirect from="*" to="/" />
                </Switch>
              </GenresContextProvider>
            </MoviesContextProvider>        
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));