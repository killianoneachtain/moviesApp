import React from "react";
import "./personDetails.css";

export default ({ person }) => {
  return (
    <>    
      <h1>{person.name}</h1>
      <br></br>
      
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Birthday
        </li>
        <li key="rut" className="list-group-item ">
          {person.birthday}
        </li>       
      </ul>   
    </>
  );
};