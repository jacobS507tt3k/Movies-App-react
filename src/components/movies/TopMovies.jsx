import React from "react";
import { MDBRow} from 'mdb-react-ui-kit';
import { useFetchMoviesInfo } from "../hooks/useFetchMoviesAPI";
import { MoviesCard } from "./MoviesCard";

export const TopMovies = () => {
  const newMovies = {
    val: "/movie/popular",
  };
  const { results } = useFetchMoviesInfo(newMovies);
  
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
