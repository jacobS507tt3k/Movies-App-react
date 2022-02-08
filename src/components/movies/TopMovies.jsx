import React from 'react';
import { useFetchMovies } from '../hooks/useFetchMovies';
import { MoviesCard } from './MoviesCard';



export const TopMovies = () => {

   const {results} = useFetchMovies();

  return (
      <div>
        
            {
              results.map((data) => (
                 <MoviesCard 
                  key={data.id}
                  {...data}
                 />
              ))
            }

      </div>
  );
};
