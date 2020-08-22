# Project - ReactJS app.

Name: Killian O'Neachtain
Student ID: 20023634

## Overview.
The app will enhance the movies app by listing the cast and crew of the movie selected. The name of the person will be linked to more detailed page about the person.
This 'Person Page' will display a list of Cast/Crew credits available and a link to each movie on the list.

-  View Cast of a Movie
-  View Crew of a Movie
-  View Persons Biography
-  View Persons Cast / Crew Credit History
-  View Movies listed in person Crew/Credit History
-  View List of Upcoming Movies
-  View Similar Movies based on the current movie being viewed

## Setup requirements.

*To run this app locally, please install [npm](https://www.npmjs.com/get-npm).*

To run :
1. Download/Clone the app from the 'GitHub' repository.
2. Navigate to the folder using 'Terminal' / 'Cmd'. Type `npm install`, press enter/return in the terminal to install node dependencies for the app.
(`npm update/audit fix` are optional if you would like to update nodes.)
3. Once all packages are installed, enter `npm start` in terminal, and press enter/return. This will open a window in your default browser displaying the app running at 'localhost/3000'.
4. To see Storybook, type `npm run storybook` and a new browser tab will open to display Storybook information.

## API Data Model.

![API Model](https://github.com/killianoneachtain/moviesApp/blob/master/Screenshot%202020-08-22%20at%2023.41.50.png)

*Shows a Persons 'Cast' credit details. Clicking on the Movie Title will bring you to the movie 'Details Page'.*

The app has been developed using [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction).

Additional Endpoints Used :

### 1. GET /movie/{movie_id}/credits - Get the cast and crew for a movie. 

  `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Key}`
  
  *Returned JSON example*:
 ```
  {
  "id": 15542,                                        // filmID
  "cast": [
    {
      "cast_id": 3,
      "character": "Raina",
      "credit_id": "52fe46659251416c75076ebf",
      "gender": 1,
      "id": 34408,                                    //Person ID
      "name": "Stana Katic",
      "order": 0,
      "profile_path": "/tqyqLe8EC3ieGPZhYrJqPXOfDMg.jpg"
    }
    ],
  "crew": [
    {
      "credit_id": "5a36fac40e0a264cc41d40f5",
      "department": "Sound",
      "gender": 2,
      "id": 8377,
      "job": "Original Music Composer",
      "name": "Cliff Martinez",
      "profile_path": null
    }
  ]
}
```
  
  
### 2. GET /person/{person_id} - Get the primary person details by id.

`https://api.themoviedb.org/3/person/${id}?api_key=${Key}&language=en-US`
  
   *Returned JSON example*:
   ```
  {
  "birthday": "1956-07-09",
  "known_for_department": "Acting",
  "deathday": null,
  "id": 31,
  "name": "Tom Hanks",
  "also_known_as": [
      "Thomas Jeffrey Hanks",
      "Том Хэнкс",
      "توم هانكس",
      "トム・ハンクス",
      "톰 행크스",
      "ทอม แฮงส์",
      "汤姆·汉克斯",
      "Том Генкс",
      "Том Хенкс",
      "Томас Джеффрі Генкс",
      "Τομ Χανκς",
      "टॉम हैंक्स",
      "ടോം ഹാങ്ക്സ്"
    ],
  "gender": 2,
  "biography": "Thomas Jeffrey Hanks (born July 9, 1956) is an American actor and filmmaker. Known for both his comedic and dramatic roles, Hanks is one of the most popular and recognizable film stars worldwide, and is widely regarded as an American cultural icon.\n\nHanks made his breakthrough with leading roles in the comedies Splash (1984) and Big (1988). He won two consecutive Academy Awards for Best Actor for starring as a gay lawyer suffering from AIDS in Philadelphia (1993) and a young man with below-average IQ in Forrest Gump (1994). Hanks collaborated with film director Steven Spielberg on five films: Saving Private Ryan (1998), Catch Me If You Can (2002), The Terminal (2004), Bridge of Spies (2015), and The Post (2017), as well as the 2001 miniseries Band of Brothers, which launched him as a director, producer, and screenwriter.\n\nHanks' other notable films include the romantic comedies Sleepless in Seattle (1993) and You've Got Mail (1998); the dramas Apollo 13 (1995), The Green Mile (1999), Cast Away (2000), Road to Perdition (2002), and Cloud Atlas (2012); and the biographical dramas Saving Mr. Banks (2013), Captain Phillips (2013), Sully (2016), and A Beautiful Day in the Neighborhood (2019). He has also appeared as the title character in the Robert Langdon film series, and has voiced Sheriff Woody in the Toy Story film series.\n\nDescription above from the Wikipedia article Tom Hanks, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
  "popularity": 25.12,
  "place_of_birth": "Concord, California, USA",
  "profile_path": "/dXlQ1ID6lnR5Av2Awn7OpUhqV8G.jpg",
  "adult": false,
  "imdb_id": "nm0000158",
  "homepage": null
}
```
### 3. GET /person/{person_id}/movie_credits - Get the movie credits for a person.

`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${Key}&language=en-US`
   
  *Returned JSON example*:
```
{
  "cast": [
    {
      "character": "Forrest Gump",
      "credit_id": "52fe420ec3a36847f800074f",
      "release_date": "1994-07-06",
      "vote_count": 18672,
      "video": false,
      "adult": false,
      "vote_average": 8.5,
      "title": "Forrest Gump",
      "genre_ids": [
        35,
        18,
        10749
      ],
      "original_language": "en",
      "original_title": "Forrest Gump",
      "popularity": 28.132,
      "id": 13,
      "backdrop_path": "/7c9UVPPiTPltouxRVY6N9uugaVA.jpg",
      "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
      "poster_path": "/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg"
    },
    {
      "character": "Paul Edgecomb",
      "credit_id": "52fe424ac3a36847f8012bc7",
      "release_date": "1999-12-10",
      ......
    }
  ],
   "crew": [
    {
      "id": 87061,
      "department": "Crew",
      "original_language": "fr",
      "original_title": "Le Voyage extraordinaire",
      "job": "Thanks",
      "overview": "An account of the extraordinary life of film pioneer Georges Méliès (1861-1938) and the amazing story of the copy in color of his masterpiece “A Trip to the Moon” (1902), unexpectedly found in Spain and restored thanks to the heroic efforts of a group of true cinema lovers.",
      "vote_count": 37,
      "video": false,
      "release_date": "2011-12-08",
      "vote_average": 7.6,
      "title": "The Extraordinary Voyage",
      "popularity": 3.529,
      "genre_ids": [
        99
      ],
      "backdrop_path": "/tx3uj8GPWf5pzb0gWATJ4bokNHI.jpg",
      "adult": false,
      "poster_path": "/zHNNT9gfiGsuadR6x38KYOp6ekq.jpg",
      "credit_id": "5d818a63d34eb3002c4f8fea"
    },
    {
      "id": 9591,
      "department": "Directing",
      "original_language": "en",
      "original_title": "That Thing You Do!",
      "job": "Director",
      ........
}
```

### 4. GET /movie/upcoming - Get a list of upcoming movies in theatres.
`https://api.themoviedb.org/3/movie/upcoming?api_key=${Key}&language=en-US&page=1**`
  
  *Returned JSON example*:
 ``` 
 {
  "results": [
    {
      "popularity": 104.397,
      "vote_count": 4,
      "video": false,
      "poster_path": "/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
      "id": 577922,
      "adult": false,
      "backdrop_path": "/6TB7E8xvlCqAWqPdS2fPkdvCVM5.jpg",
      "original_language": "en",
      "original_title": "Tenet",
      "genre_ids": [
        28,
        53
      ],
      "title": "Tenet",
      "vote_average": 5,
      "overview": "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      "release_date": "2020-08-22"
    },
    {
      "popularity": 97.043,
      "vote_count": 98,
      "video": false,
      .......
      }
    ]    
}
```

### 5.GET /movie/{movie_id}/similar - Get a list of similar movies.
`https://api.themoviedb.org/3/movie/150540/similar?api_key={Key}&language=en-US&page=1`
 *Returned JSON example*:
 ``` 
 {
  "page": 1,
  "results": [
    {
      "id": 12092,
      "video": false,
      "vote_count": 4161,
      "vote_average": 7.1,
      "title": "Alice in Wonderland",
      "release_date": "1951-07-28",
      "original_language": "en",
      "original_title": "Alice in Wonderland",
      "genre_ids": [
        12,
        16,
        14,
        10751
      ],
      "backdrop_path": "/b4yiLlIFuiULuuLTxT0Pt1QyT6J.jpg",
      "adult": false,
      "overview": "On a golden afternoon, young Alice follows a White Rabbit, who disappears down a nearby rabbit hole. Quickly following him, she tumbles into the burrow - and enters the merry, topsy-turvy world of Wonderland! Memorable songs and whimsical escapades highlight Alice's journey, which culminates in a madcap encounter with the Queen of Hearts - and her army of playing cards!",
      "poster_path": "/AdwfqyNiH8UqeYKFYoiKhwTtjAb.jpg",
      "popularity": 28.906
    },
    {
      "adult": false,
      "backdrop_path": "/dVM0ZSzbMbz7b0LxrNRz1gdhcGM.jpg",
      "genre_ids": [
        10751,
        35,
        14
        ]
      ......
    }
  ]
}
```

## App Design.

### Component catalogue.

![Stories](https://github.com/killianoneachtain/moviesApp/blob/master/Screenshot%202020-08-22%20at%2022.57.35.png)

*Shows Storybook UI with additional stories highlighted.*

### UI Design.


![Test Image 1](https://github.com/killianoneachtain/moviesApp/blob/master/Screenshot%202020-08-22%20at%2015.23.36.png)

*Shows the Cast List for a movie. Clicking on the actor's name will take you to the actor's 'Profile Page'.*

![Test Image 2](https://github.com/killianoneachtain/moviesApp/blob/master/Screenshot%202020-08-22%20at%2015.23.46.png)

*Shows the Crew List for a movie. Clicking on the crew-member's name will take you to the crew-member's 'Profile Page'.*

![Test Image 3](https://github.com/killianoneachtain/moviesApp/blob/master/Screenshot%202020-08-22%20at%2015.24.14.png)

*Shows a Persons biography details. Displayed below are the movies the person has 'Cast' or 'Crew' credits for.*

![Test Image 4](https://github.com/killianoneachtain/moviesApp/blob/master/Screenshot%202020-08-22%20at%2015.24.26.png)

*Shows a Persons 'Cast' credit details. Clicking on the Movie Title will bring you to the movie 'Details Page'.*

![Test Image 5](https://github.com/killianoneachtain/moviesApp/blob/master/Screenshot%202020-08-22%20at%2015.24.36.png)

*Shows a Persons 'Crew' credit details. Clicking on the Movie Title will bring you to the movie 'Details Page'.*

![Test Image 6](https://github.com/killianoneachtain/moviesApp/blob/master/Screenshot%202020-08-22%20at%2015.25.03.png)

*Displays a list(20) of upcoming Movies. Clicking on the movie will bring you to the movie 'Details Page'.*

![Test Image 7](https://github.com/killianoneachtain/moviesApp/blob/master/Screenshot%202020-08-22%20at%2022.49.27.png)

*Displays a list of similar Movies to the movie currently viewing on 'Movie Details Page'.*

### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. For projects that expanded the Movies Fan app, only new routes should be listed ......... 

+ /movies/upcoming (public) - displays 20 upcoming movies.
+ /person/:id (public) - detail view of a particular person and its cast/crew credits.
+ /movies/:id/castcredits (public) - displays movies cast details with links to persons.
+ /movies/:id/crewcredits (public) - displays movies crew details with links to persons.
+ /movies/:id/similar (public) - displays movies that are similar to the current movie being viewed.
+ /person/:id/castcredits (public) - detail view of a particular person's cast credits, with link to the movie page.
+ /person/:id/crewcredits (public) - detail view of a particular person's crew credits, with link to the movie page.

## React feature set.

+ useState and useEffect hooks - src/contexts/genresContext.js
+ useContext hook - src/pages/homePage.js
+ Extended Link - src/components/movieCard/index.js
+ Programmatic navigation - src/pages/movieDetailsPage.js
+ Routing -  src/pages/movieDetailsPage.js
+ Children passing - src/components/templateMoviePage/index.js 
+ Action - src/components/movieCard/index.js
+ createContext hook - src/contexts/moviesContext.js
+ useReducer hook - src/contexts/moviesContext.js

## Independent learning.


[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png
