import { useEffect, useState } from "react";
import {getPerson} from '../api/tmdb-api'

const usePerson = id => {
  const [Person, setPerson] = useState(null);
  useEffect(() => {
    getPerson(id).then(Person => {
      setPerson(Person);
    });
  }, [id]);
  return [Person, setPerson];
};

export default usePerson