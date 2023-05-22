import React from "react";
import "./Details.css";

const CardDetail = (props) => {
    
  return (
    <div className="card">
      <img src={props.src} width="68px"/>
     
      <div className="card-title">{props.title}</div>
      <div className="card-info">{props.info}</div>
      <div className="card-info">vv</div>



    </div>
  );
};

export default CardDetail;
