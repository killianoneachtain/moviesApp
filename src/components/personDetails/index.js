import React from "react";
import "./personDetails.css";
//import personDetailsPage from "../../pages/personDetailsPage";

export default ({ person }) => {
  var sex;
  if(person.gender === 2)
  { sex = "Male";}
  if(person.gender === 1)
  { sex = "Female";}


  return (
    <>
    <h6>Born : {person.birthday}</h6>    
    <h6>Place of Birth: {person.place_of_birth}</h6>
    <h6>Gender: {sex}</h6>
    
    <h8>Also Known as: {person.also_known_as[0]}</h8>
      <h4>Biography</h4>
      <p>{person.biography}</p>
      
      <ul className="list-group list-group-horizontal">        
        <li key="ruh" className="list-group-item list-group-item-dark">
          Known For
        </li>
        <li key="rut" className="list-group-item ">
          {person.known_for_department}
        </li>   
      </ul>    
    </>
  );
};