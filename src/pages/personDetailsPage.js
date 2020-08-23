import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import PersonDetails from "../components/personDetails";
import PageTemplate from "../components/templatePersonPage";
import {usePerson, usePersonMovieCredits} from "../hooks/usePerson";
import CastCredits from "../components/castCredits";
import Crewcredits from "../components/crewCredits";


const PersonPage = props => {
  const { id } = props.match.params;
  const [person] = usePerson(id)  // NEW Week 4
  const [personMovieCredits] = usePersonMovieCredits(id);
  
  return (
    <>
    { person && personMovieCredits ? (
      <>
      <html>
          <head>
            <title>{person.name} Biography</title>
          </head>
          <body>
        <PageTemplate person={person}>
          <PersonDetails person={person} />
        </PageTemplate>

        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/castcredits") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/person/${id}/castcredits`}
              >
                Show Cast Credits
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/person/${id}`}
              >
                Hide Cast Credits 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/person/:id/castcredits`}
          render={props => <CastCredits person={personMovieCredits} {...props} />}
        />

        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/crewcredits") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/person/${id}/crewcredits`}
              >
                Show Crew Credits
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/person/${id}`}
              >
                Hide Crew Credits
              </Link>
            )}
          </div>
        </div>
        </body>
        </html>
        <Route
          path={`/person/:id/crewcredits`}
          render={props => <Crewcredits person={personMovieCredits} {...props} />}
        />

      </>
    ) : (
      <p>Waiting for person details</p>
    )}
  </>
  );
};

export default withRouter(PersonPage);