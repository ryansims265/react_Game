import React from "react";
import '../App';



  const Cards = props => (
    <div className="card" onClick={() => props.clickCount(props.id)}>
      <div className="img-space">
        <img className="carimages" alt={props.name} src={props.image} />
      </div>
    </div>
  );
  
  export default Cards;