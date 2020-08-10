
import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { getSimilar } from "../../api/tmdb-api";

export default ({ movie}) => {
    const [movies, setSimilar] = useState([]);

    useEffect(() => {
        getSimilar(movie.id).then(movies => {
            setSimilar(movies);
        });
    },
    // eslint-disable-next-line
    []);

    return (
        <table className="table table-striped table-bordered table-hover">
          <caption>Similar Movie List</caption>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Release Date</th>
            <th scope="col">Rating</th>          
          </tr>
        </thead>
        <tbody>
          {movies.map(r => {
              return (
                <tr class='table-info' key={r.id}>
                  <td>{r.title}</td>
                 <td>{r.release_date}</td>
                    
                  <td>
                    {" "}
                    <Link
                      to={{
                        pathname: `/movies/${r.id}`,
                        state: {
                          review: r,
                          movie: movie
                        }
                      }}
                    >
                      {r.title}
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
};