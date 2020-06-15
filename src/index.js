import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'

/*const sample = {
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
};*/

const sample = 
  {
    adult: false,
    backdrop_path: "/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
    belongs_to_collection: null,
    budget: 55000000,
    genres: [
    {
    id: 80,
    name: "Crime"
    },
    {
    id: 53,
    name: "Thriller"
    },
    {
    id: 18,
    name: "Drama"
    }
    ],
    homepage: "http://www.jokermovie.net/",
    id: 475557,
    imdb_id: "tt7286456",
    original_language: "en",
    original_title: "Joker",
    overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    popularity: 83.022,
    poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    production_companies: [
    {
    id: 9993,
    logo_path: "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
    name: "DC Entertainment",
    origin_country: "US"
    },
    {
    id: 174,
    logo_path: "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
    name: "Warner Bros. Pictures",
    origin_country: "US"
    },
    {
    id: 429,
    logo_path: "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
    name: "DC Comics",
    origin_country: "US"
    },
    {
    id: 83036,
    logo_path: null,
    name: "Joint Effort",
    origin_country: "US"
    },
    {
    id: 79,
    logo_path: "/tpFpsqbleCzEE2p5EgvUq6ozfCA.png",
    name: "Village Roadshow Pictures",
    origin_country: "US"
    },
    {
    id: 13240,
    logo_path: "/aTc07YaNHo8WNgkQSnvLmG6w4nW.png",
    name: "Bron Studios",
    origin_country: "CA"
    },
    {
    id: 53152,
    logo_path: "/8XHHLy8GGTuHM9JMzYjGqxB6oPa.png",
    name: "Creative Wealth Media Finance",
    origin_country: "CA"
    },
    {
    id: 128064,
    logo_path: null,
    name: "DC Films",
    origin_country: "US"
    },
    {
    id: 57409,
    logo_path: null,
    name: "22 & Indiana Pictures",
    origin_country: ""
    }
    ],
    production_countries: [
    {
    iso_3166_1: "CA",
    name: "Canada"
    },
    {
    iso_3166_1: "US",
    name: "United States of America"
    }
    ],
    release_date: "2019-10-02",
    revenue: 1074251311,
    runtime: 122,
    spoken_languages: [
    {
    iso_639_1: "en",
    name: "English"
    }
    ],
    status: "Released",
    tagline: "Put on a happy face.",
    title: "Joker",
    video: false,
    vote_average: 8.2,
    vote_count: 13149    

};

//const movies = [sample, sample, sample];

const App = () => {
  return (
    <div className="jumbotron">
      <MoviePage movie={sample} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));