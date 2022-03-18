import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFetchMoviesSearch } from "../hooks/useFetchMoviesAPI";
import { MDBRow} from 'mdb-react-ui-kit';
import { MoviesCard } from './MoviesCard';

export const MoviesList = () => {

  const {buscar} = useSelector((state) => state.card)
  console.log(buscar)
  const { results } = useFetchMoviesSearch(buscar);
  console.log(results)
  
  return (
    <div>
            <MDBRow className="animate__animated animate__slideInLeft">
        {results.map((data) => (
          
            <MoviesCard key={data.id} {...data} />
         
        ))}
       </MDBRow>

    </div>
  );
};
