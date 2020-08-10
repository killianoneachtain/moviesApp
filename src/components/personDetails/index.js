import React from "react";
import "./personDetails.css";

export default ({ person, personMovieDetails }) => {



  return (
    <>
    <h6>Born : {person.birthday}</h6>    
    <h6>Place of Birth: {person.place_of_birth}</h6>
    <h6>Gender:  {person.gender === 2 ? 'Male' : 'Female'}</h6>
    
    <h6>Also Known as: {person.also_known_as[0]}</h6>
    <ul className="list-group list-group-horizontal">        
        <li key="ruh" className="list-group-item list-group-item-dark">
          Known For
        </li>
        <li key="rut" className="list-group-item ">
          {person.known_for_department}
        </li>  
        <br></br> 
    </ul> 
    <p></p>
      <h4>Biography</h4>
      <p>{person.biography}</p>
    </>
  );

  
};