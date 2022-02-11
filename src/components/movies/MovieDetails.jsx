import React from "react";
import {MDBCol ,  MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardLink, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

export const MovieDetails = ({title, overview, image, release_date, id}) => {

  const imagen =`https://image.tmdb.org/t/p/w500/${image}`
  return (
    <>
    <MDBCol  className="mt-4 mb-4 col-lg-3" >
    <MDBCard className="" /* style={{ width: '10rem' }} */>
      <MDBCardImage position='top' alt='...' src={imagen} />
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText >
          {overview}
        </MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem>Fecha de lanzamineto: {release_date}</MDBListGroupItem>
        <MDBListGroupItem>Genero:</MDBListGroupItem>
        <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
      </MDBListGroup>
      <MDBCardBody>
        <MDBCardLink >Ver más ...</MDBCardLink>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    </>
  );
};