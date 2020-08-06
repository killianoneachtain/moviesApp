
import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { getCastCrew } from "../../api/tmdb-api";

export default ({ movie}) => {
    const [credits, setCastCrew] = useState([]);

    useEffect(() => {
        getCastCrew(movie.id).then(credits => {
            setCastCrew(credits.crew);
        });
    },
    // eslint-disable-next-line
    []);

    return (
        <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Department</th>
            <th scope="col">Job</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {credits.map(r => {
              return (
                <tr key={r.id}>
                  <td>{r.department}</td>
                    <td>{r.job}</td>
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
                </tr>
              );
            })}
        </tbody>
      </table>
    );
};