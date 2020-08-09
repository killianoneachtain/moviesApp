import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { getPersonMovieCredits } from "../../api/tmdb-api";

export default ({ person}) => {
    const [credits, setPersonMovieCredits] = useState([]);

    useEffect(() => {
        getPersonMovieCredits(person.id).then(credits => {
            setPersonMovieCredits(credits.cast);
        });
    },
    // eslint-disable-next-line
    []);

    return (
        <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Movie title</th>
            <th scope="col">Character</th>
            <th scope="col">Vote Average</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {credits.map(r => {
              return (
                <tr key={r.id}>
                    <td>
                    {" "}
                    <Link
                      to={{
                        pathname: `/movies/${r.id}`,
                        state: {
                          review: r
                        }
                      }}
                    >
                      {r.title}
                    </Link>
                  </td>                  
                    <td>{r.character}</td>
                    <td>{r.vote_average}</td>
                  
                </tr>
              );
            })}
        </tbody>
      </table>
    );
};