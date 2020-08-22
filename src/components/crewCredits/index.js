
import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { getPersonMovieCredits } from "../../api/tmdb-api";

export default ({ person}) => {
    const [credits, setPersonCrewCredits] = useState([]);

    useEffect(() => {
        getPersonMovieCredits(person.id).then(credits => {
            setPersonCrewCredits(credits.crew);
        });
    },   
    // eslint-disable-next-line
    []);

    return (
        <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Department</th>
            <th scope="col">Job</th>
            <th scope="col">Release Date</th>
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
                  <td>{r.department}</td>
                    <td>{r.job}</td>  
                    <td>{r.release_date}</td>               
                </tr>
              );
            })}
        </tbody>
      </table>
    );
};