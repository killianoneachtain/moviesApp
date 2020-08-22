/* Key Notes

  1. Any component that uses the Link component needs to be wrapped inside a Router component. In the app code 
  itself the BrowserRouter component served this purpose. In a story we can use MemoryRouter, which is more 
  lightweight.

  2. The addDecorator method has the effect of wrapping a story's component inside another component. A common use
  case for it is related to the previous point, i.e. MemoryRouter.

  3. The FilterControls component uses the GenresContext, therefore, we must wrap any related story with
  GenresContextProvider.

  4. Some components expect a callback function as a prop. The Storybook actions addon can be used to create
  simple callbacks for this use case.

*/

import React from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieCard from "../src/components/movieCard";
import FilterControls from "../src/components/filterControls";
import MoviesHeader from "../src/components/headerMovieList";
import MovieList from "../src/components/movieList";
import MovieDetails from "../src/components/movieDetails";
import MovieHeader from "../src/components/headerMovie";
import PersonHeader from "../src/components/headerPerson";
import PersonDetails from "../src/components/personDetails";
import CastCredits from "../src/components/castCredits";
import CrewCredits from "../src/components/crewCredits";
import Cast from "../src/components/cast";
import Crew from "../src/components/crew";
//import AddFavoriteButton from "../src/components/buttons/addToFavorites";
import { MemoryRouter } from "react-router";
import GenresContextProvider from "../src/contexts/genresContext";
import { action } from "@storybook/addon-actions";

const samplePerson = {
  birthday: "1992-04-10",
  known_for_department: "Acting",
  deathday: null,
  id: 1315036,
  name: "Daisy Ridley",
  also_known_as: [   
    "Daisy Jazz Isobel Ridley"
  ],
  gender: 1,
  biography: "Daisy Jazz Isobel Ridley (born 10 April 1992) is an English actress. Ridley was born in Westminster, London.\n\nHer great-uncle was actor and playwright Arnold Ridley, of Dad's Army fame. She attended Tring Park School for the Performing Arts in Hertfordshire, graduating in 2010 at the age of 18.\n\nRidley has appeared in the television programmes such as Toast of London, Youngers, Silent Witness, Mr Selfridge and Casualty. She also appeared in the short film Blue Season, which was entered into the Sci-Fi-London 48-Hour Film Challenge. She played the lead in film three of Lifesaver, an interactive film which was nominated for a BAFTA British Academy Award. She has also appeared in the music video for Wiley's song \"Lights On\".\n\nIn April 2014, it was announced that she will play Rey, one of the lead characters in Star Wars: The Force Awakens. She was chosen for the film in February 2014. The casting of Ridley has generally been seen as a deliberate move from director J. J. Abrams, as he wishes to repeat the casting of relatively unknown actors for the lead roles like George Lucas did with the first Star Wars film in 1977.\n\nAfter receiving several competing offers, Ridley switched from her original talent agency Jonathan Arun to the United Talent Agency in August 2014. Following a two-month stint with UTA, Ridley signed on with the Creative Artists Agency in October 2014.",
  popularity: 4.009,
  place_of_birth: "Westminster, London, England, UK",
  profile_path: "/n8kBnNOi9VmELHJy3FdZjrSN9zT.jpg",
  adult: false,
  imdb_id: "nm5397459",
  homepage: "http://daisyridley.us/"
}

const sampleUpcoming = {  
  popularity: 104.397,
  vote_count: 4,
  video: false,
  poster_path: "/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
  id: 577922,
  adult: false,
  backdrop_path: "/6TB7E8xvlCqAWqPdS2fPkdvCVM5.jpg",
  original_language: "en",
  original_title: "Tenet",
  genre_ids: [
    28,
    53
  ],
  title: "Tenet",
  vote_average: 5,
  overview: "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
  release_date: "2020-08-22"    
}

const sampleMovie = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
  },
  budget: 200000000,
  genres: [
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 28,
      name: "Action"
    }
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  id: 181808,
  imdb_id: "tt2527336",
  original_language: "en",
  original_title: "Star Wars: The Last Jedi",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  popularity: 44.208,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Ram Bergman Productions",
      origin_country: "US"
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US"
    }
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America"
    }
  ],
  release_date: "2017-12-13",
  revenue: 1332459537,
  runtime: 152,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English"
    }
  ],
  status: "Released",
  tagline: "Darkness rises... and light to meet it",
  title: "Star Wars: The Last Jedi",
  video: false,
  vote_average: 7,
  vote_count: 9692
};

storiesOf("Home Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sampleMovie}
      action={movie => <button className="btn w-100 btn-primary">Test</button>}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sampleMovie, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Home Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

storiesOf("Home Page/Header", module).add("default", () => (
  <MoviesHeader title="All Movies" numMovies={10} />
));

storiesOf("Home Page/MovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sampleMovie, sampleMovie, sampleMovie, sampleMovie, sampleMovie];
    return (
      <MovieList
        movies={movies}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

  storiesOf("Home Page/UpcomingMovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sampleUpcoming, sampleUpcoming, sampleUpcoming, sampleUpcoming, sampleMovie];
    return (
      <MovieList
        movies={movies}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Movie Details Page/MovieDetails", module)
.add("default", () => (
  <MovieDetails movie={sampleMovie} />
));

storiesOf("Person Details Page/PersonDetails", module)
.add("default", () => (
  <PersonDetails person={samplePerson} />
));

storiesOf("Movie Details Page/MovieHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <MovieHeader movie={sampleMovie} />);

storiesOf("Person Details Page/PersonHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <PersonHeader person={samplePerson} />);

storiesOf("Person Details Page/PersonDetails/CastCredits", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => <CastCredits person={samplePerson} />);

storiesOf("Person Details Page/PersonDetails/CrewCredits", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => <CrewCredits person={samplePerson} />);

storiesOf("Movie Details Page/MovieDetails/Cast", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => <Cast movie={sampleMovie} />);


storiesOf("Movie Details Page/MovieDetails/Crew", module)
.addDecorator(story => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
))
.add("default", () => <Crew movie={sampleMovie} />);

