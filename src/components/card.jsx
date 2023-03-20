import React from "react";
import contacts from "../contacts";
// Creating a reusable card component and rendering it with props
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="Celeb Img" />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
