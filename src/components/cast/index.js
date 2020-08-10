
import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { getCastCrew } from "../../api/tmdb-api";

export default ({ movie}) => {
    const [credits, setCastCrew] = useState([]);

    useEffect(() => {
        getCastCrew(movie.id).then(credits => {
            setCastCrew(credits.cast);
        });
    },
    // eslint-disable-next-line
    []);

    return (
        <table className="table table-striped table-bordered table-hover">
          <caption>Cast List</caption>
        <thead>
          <tr>
            <th scope="col">Character</th>
            <th scope="col">Actor</th>           
          </tr>
        </thead>
        <tbody>
          {credits.map(r => {
              return (
                <tr class='table-info' key={r.id}>
                  <td>{r.character}</td>
                    
                  <td>
                    {" "}
                    <Link
                      to={{
                        pathname: `/person/${r.id}`,
                        state: {
                          review: r,
                          movie: movie
                        }
                      }}
                    >
                      {r.name}
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
};