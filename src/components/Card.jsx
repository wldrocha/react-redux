import React from "react";
import "../assets/styles/components/Card.scss";
import InfoText from "./InfoText"

const Card = ({title, parraphText}) => {

  return (
    <div>
      <InfoText title={title} parraphText={parraphText} />
    </div>
  );
};

export default Card;