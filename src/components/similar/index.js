
import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { getSimilar } from "../../api/tmdb-api";

export default ({ movie}) => {
    const [credits, setSimilar] = useState([]);

    useEffect(() => {
        getSimilar(movie.id).then(movies => {
            setSimilar(movies);
        });
    },
    // eslint-disable-next-line
    []);

    return (
        <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Movie</th>
            <th scope="col">Release Date</th>
            <th scope="col">Vote Average</th>
          </tr>
        </thead>
        <tbody>
          {credits.map(r => {
              return (
                <tr key={r.id}>
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
                  <td>  {r.vote_average}</td>  
                    <td>{r.release_date}</td>
                        
                </tr>
              );
            })}
        </tbody>
      </table>
    );
};