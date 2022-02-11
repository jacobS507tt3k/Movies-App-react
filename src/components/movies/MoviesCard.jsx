import React, { useState } from "react";
import {MDBCol ,  MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardLink, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { Link } from "react-router-dom";

export const MoviesCard = ({title, overview, image, release_date, id, votes, genero}) => {

 



  const imagen =`https://image.tmdb.org/t/p/w500/${image}`
  return (
    <>
    
    <MDBCol  className="mt-4 mb-4 col-lg-3 " >
    <MDBCard className="" /* style={{ width: '10rem' }} */>
      <MDBCardImage position='top' alt='...' src={imagen} />
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem>Fecha de lanzamineto: {release_date}</MDBListGroupItem>
        
      </MDBListGroup>
      <MDBCardBody>
        <MDBCardLink ><Link to="details">Ver más...</Link></MDBCardLink>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    </>
  );
};
