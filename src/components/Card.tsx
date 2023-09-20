import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/components/Card.scss'


const Card = ({title, subtitle , parraphText, link, linkText, linkColor, textAling, shadow, color})=>{
    return (
      <article
        className={["article", shadow ? "card" : "", color ? "white" : ""].join(
          " "
        )}
      >
        <h3 className="title">{title}</h3>
        <p>{parraphText}</p>
        {link != undefined && linkText != undefined && (
          <Link to={link} className={["button-card", color ? "btn-white" : ""].join(" ")}>
            {linkText}
          </Link>
        )}
      </article>
    );
}

export default Card;