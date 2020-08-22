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

## Setup requirements.

*To run this app locally, please install [npm](https://www.npmjs.com/get-npm).*

To run :
1. Download/Clone the app from the 'GitHub' repository.
2. Navigate to the folder using 'Terminal' / 'Cmd'. Type 'npm install' in the terminal to install node dependencies for the app.
('npm update/audit fix' are optional if you would like to update nodes.)
3. Once all packages are installed, enter 'npm start' in terminal. This will open a window in your default browser displaying the app running at 'localhost/3000'.

## API Data Model.

The app has been developed using [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction).

Additional Endpoints Used :

1. GET /movie/{movie_id}/credits - Get the cast and crew for a movie.

 > **https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Key}**
  
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
  
  
2. GET /person/{person_id} - Get the primary person details by id.

 > **https://api.themoviedb.org/3/person/${id}?api_key=${Key}&language=en-US**  
  
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
3. GET /person/{person_id}/movie_credits - Get the movie credits for a person.

>  **https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${Key}&language=en-US**
   
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

4. GET /movie/upcoming - Get a list of upcoming movies in theatres.

 > **https://api.themoviedb.org/3/movie/upcoming?api_key=${Key}&language=en-US&page=1**
  
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

## App Design.

### Component catalogue.

....... Insert a screenshot from the Storybook UI showing your components' stories. [For projects that expanded the Movies app, hi-light stories relating to new/modified components - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the app's views (see example below) with appropriate captions (For extension to the Movies Fan App, only show the new/modified views) ........

![][view]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. For projects that expanded the Movies Fan app, only new routes should be listed ......... 

+ /blogs - displays all published blogs.
+ /blogs/:id (private) - detail view of a particular blog.
+ /blogs/:id/comments (private) - detail view of a particular blog and its comments.
+ etc.
+ etc.

## React feature set.

..... Insert a bullet-point list of the React features used in your project, including one source code file references for each - see examples below ......

+ useState and useEffect hooks - src/components/fileA.js
+ useContext hook - src/components/fileb.js
+ Extended Link - src/components/fileA.js
+ Programmatic navigation - src/pages/fileC.js
+ etc
+ etc
+ etc

## Independent learning.

. . . . . Briefly state the technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include source material references (articles/blogs) ......... 


[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png
