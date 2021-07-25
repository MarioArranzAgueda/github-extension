import { useState, useEffect } from 'react';
import { getRepositories } from '../services/Github';

const useRepository = (userName='') => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    getRepositories(userName)
      .then((data) => {
        console.log(data)
        setRepositories(data);
      })
      .catch((err) => new Error(err));
  }, [userName]);


  return repositories;
};

export default useRepository;
