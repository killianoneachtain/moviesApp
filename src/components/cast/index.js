import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { getCastCrew } from "../../api/tmdb-api";

export default ({ movie}) => {
    const [credits, setCastCrew] = useState([]);

    useEffect(() => {
        getCastCrew(movie.id).then(credits => {
            setCastCrew(credits);
        });
    },
    // eslint-disable-next-line
    []);

    return (
        <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Character</th>
            <th scope="col">Actor</th>
            <th scope="col">More Details</th>
          </tr>
        </thead>
        <tbody>
          {credits.map(r => {
              return (
                <tr key={r.cast.id}>
                  <td>{r.cast.character}</td>
                    <td>{r.cast.name}</td>
                  <td>
                    {" "}
                    <Link
                      to={{
                        pathname: `/credits/${r.cast.id}`,
                        state: {
                          review: r,
                          movie: movie
                        }
                      }}
                    >
                      Full Review
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
};