import React from "react";
import { MDBRow} from 'mdb-react-ui-kit';
import { useFetchMovies } from "../hooks/useFetchMovies";
import { MoviesCard } from "./MoviesCard";

export const NewMovies = () => {
  const upcoming = {
    val: "/movie/upcoming",
  };

  const { results } = useFetchMovies(upcoming);
  
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
