import React, { Fragment } from "react";
import "../assets/styles/components/Card.scss";
import CreditCard from "../components/CreditCard";
import Card from "../components/Card";

const Home = () => {

  let hero = {
    title: "Be Smart Take Card",
    parraphText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi odio voluptatum consequatur voluptate ea illum similique unde, numquam, quaerat eos nisi officiis impedit. Maxime distinctio cum dolores architecto aliquam perferendis.",
    link: "users",
    linkText: "User list",
    textAling: "center"
  };

  let card = [
    {
      subtitle: "loreLorem ipsum dolor sit ametm",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi odio voluptatum consequatur voluptate ea illum similique unde, numquam, quaerat eos nisi officiis impedit. Maxime distinctio cum dolores architecto aliquam perferendis.",
    },
  ];




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
      shadow: true
    },
    {
      id: 3,
      title: "Card Delivery",
      parraphText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi odio voluptatum consequatur vo.",
    },
  ];

  let creditCards = [{name: "Jhon Doe", phone:"#### #### #### ####" }, {name: "Jhon Doe", phone:"#### #### #### ####", bg:'cyan' }, {name: "Jhon Doe", phone:"#### #### #### ####", bg:'magenta'}];


  return (
    <Fragment>
      <div>
        <Card {...hero} />
      </div>
      <CreditCard {...creditCards[0]} />
      {infoCards.map((item) => (
        <Card key={item.id} {...item} />
      ))}
      <section>
        <Card {...hero} />
      </section>
      <section>
        <Card {...hero} />
      </section>
      <section>
        {creditCards.map((card, index) => (
          <CreditCard key={index} {...card}/>
        ))}
      </section>
    </Fragment>
  );
};

export default Home;