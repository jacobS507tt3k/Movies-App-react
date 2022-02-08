import React from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";


export const MoviesCard = ({title, overview, image, release_date}) => {

  const imagen =`https://image.tmdb.org/t/p/w500/${image}`
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {overview}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Fecha de lanzamiento: {release_date}</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
