import React from "react";
import { Row, Col } from "react-bootstrap";
import { useFetchMovies } from "../hooks/useFetchMovies";
import { MoviesCard } from "./MoviesCard";

export const NewMovies = () => {
  const upcoming = {
    val: "/movie/upcoming",
  };

  const { results } = useFetchMovies(upcoming);

  return (
    <div>
      <Row xs={1} md={4} className="g-4">
      
        {
          results.map((data) => (
          <Col className="">
          <MoviesCard key={data.id} {...data} />
          </Col>
        ))
      }
      </Row>
    </div>
  );
};
