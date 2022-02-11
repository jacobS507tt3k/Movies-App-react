import React from "react";
import { MDBRow} from 'mdb-react-ui-kit';
import { useFetchMovies } from "../hooks/useFetchMovies";
import { MoviesCard } from "./MoviesCard";

export const TopMovies = () => {
  const newMovies = {
    val: "/movie/popular",
  };
  const { results } = useFetchMovies(newMovies);
  
  return (

    <div>
      <MDBRow >
        {results.map((data) => (
          
            <MoviesCard key={data.id} {...data} />
         
        ))}
       </MDBRow>
    </div>
  );
};
