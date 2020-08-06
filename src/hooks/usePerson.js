import { useEffect, useState } from "react";
import {getPerson, getPersonMovieCredits} from '../api/tmdb-api'

const usePerson = id => {
  const [Person, setPerson] = useState(null);
  useEffect(() => {
    getPerson(id).then(Person => {
      setPerson(Person);
    });
  }, [id]);
  return [Person, setPerson];
};

const usePersonMovieCredits = id => {
  const [PersonMovieCredits, setPersonMovieCredits] = useState(null);
  useEffect(() => {
    getPersonMovieCredits(id).then(PersonMovieCredits => {
      setPersonMovieCredits(PersonMovieCredits);
    });
  }, [id]);
  return [PersonMovieCredits, setPersonMovieCredits];
};

export { usePerson, usePersonMovieCredits }