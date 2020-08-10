import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import SiteHeader from './components/siteHeader'; 
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage';
import FavoriteMoviesPage from './pages/favoritesMoviesPage';  
import MovieReviewPage from "./pages/movieReviewPage"; 
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import AddMovieReviewPage from './pages/addMovieReviewPage'; 
import PersonPage from './pages/personDetailsPage';

import MoviesContextProvider from "./contexts/moviesContext"; 
import GenresContextProvider from "./contexts/genresContext"; 
import UpcomingMoviesContextProvider from "./contexts/upcomingMoviesContext"; 


const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader />      
        <div className="container-fluid">
            <MoviesContextProvider>
              <UpcomingMoviesContextProvider> 
                  <GenresContextProvider>
                    <Switch>
                    <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                      <Route path="/reviews/:id" component={MovieReviewPage} />
                      <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                      <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />  
                      <Route path="/movies/:id" component={MoviePage} />
                      <Route path="/person/:id" component={PersonPage} />
                      <Route path="/" component={HomePage} />          
                     
                      <Redirect from="*" to="/" />
                    </Switch>
                  </GenresContextProvider>
              </UpcomingMoviesContextProvider>   
            </MoviesContextProvider>        
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));