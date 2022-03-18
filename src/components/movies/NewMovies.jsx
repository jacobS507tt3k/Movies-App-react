import React from "react";
import { MDBRow} from 'mdb-react-ui-kit';
import { useFetchMoviesInfo } from "../hooks/useFetchMoviesAPI";
import { MoviesCard } from "./MoviesCard";

export const NewMovies = () => {
  const upcoming = {
    val: "/movie/upcoming",
  };

  const { results } = useFetchMoviesInfo(upcoming);
  
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
