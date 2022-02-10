import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFetchMoviesSearch } from "../hooks/useFetchMoviesSearch";
import { Row, Col } from "react-bootstrap";
import { MoviesCard } from './MoviesCard';

export const MoviesList = () => {

  const {buscar} = useSelector((state) => state.card)
  console.log(buscar)
  const { results } = useFetchMoviesSearch(buscar);
  console.log(results)

  useEffect(() => {
   
  }, [results])
  
  return (
    <div>
      <Row xs={1} md={4} className="g-4">
        {results.map((data) => (
          <Col className="">
            <MoviesCard key={data.id} {...data} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
