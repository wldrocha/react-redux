import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import "../assets/styles/components/InfoText.scss";
import CreditCard from "../components/CreditCard";
import InfoText from "../components/InfoText";
import Card from "../components/Card";

const Home = () => {

  let hero = {
    title: "Be Smart Take Card",
    parraphText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi odio voluptatum consequatur voluptate ea illum similique unde, numquam, quaerat eos nisi officiis impedit. Maxime distinctio cum dolores architecto aliquam perferendis.",
  };

  let infoCards = [
    {
      id: 1,
      title: "Aplication Online",
      parraphText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi odio voluptatum consequatur voluptate ea illum similique unde, numquam, quaerat eos nisi officiis impedit. Maxime distinctio cum dolores architecto aliquam perferendis.",
    },
    {
      id: 2,
      title: "Get All Aproveal",
      parraphText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi odio voluptatum consequatur vo.",
    },
    {
      id: 3,
      title: "Card Delivery",
      parraphText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi odio voluptatum consequatur vo.",
    },
  ];

  let cards = [{name: "Jhon Doe", phone:"#### #### #### ####" }, {name: "Jhon Doe", phone:"#### #### #### ####" }, {name: "Jhon Doe", phone:"#### #### #### ####" }];

  return (
    <Fragment>
      <div>
        <InfoText title={hero.title} parraphText={hero.parraphText} />
        <Link to="/users">Listar Usuarios</Link>
      </div>
      <CreditCard {...cards[0]} />
      {infoCards.map((item) => (
        <Card key={item.id} {...item} />
      ))}
      <section>
        <InfoText title={hero.title} parraphText={hero.parraphText} />
      </section>
      <section>
        <InfoText title={hero.title} parraphText={hero.parraphText} />
      </section>

      <section>
        {cards.map((card, index) => (
          <CreditCard key={index} />
        ))}
      </section>
    </Fragment>
  );
};

export default Home;