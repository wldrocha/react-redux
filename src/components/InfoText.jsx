import React from "react";
import '../assets/styles/components/InfoText.scss'


const InfoText = ({title, parraphText, button, buttonText})=>{



    return (
      <div>
        <h3>{title}</h3>
        <p>{parraphText}</p>
      </div>
    );
}

export default InfoText;