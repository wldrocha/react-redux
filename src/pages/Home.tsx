import React, { Fragment } from 'react'
// import "../assets/styles/Home.scss";
import Card from '../components/Card'
import { CreditCard } from '../components/CreditCard'

const Home = () => {
  const hero = {
    title: 'Be Smart Take Card',
    parraphText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi odio voluptatum consequatur voluptate ea illum similique unde, numquam, quaerat eos nisi officiis impedit. Maxime distinctio cum dolores architecto aliquam perferendis.',
    link: 'users',
    linkText: 'User list',
    textAling: 'center',
    color: 'white',
  }

  // const card = [
  //   {
  //     subtitle: "loreLorem ipsum dolor sit ametm",
  //     text:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi odio voluptatum consequatur voluptate ea illum similique unde, numquam, quaerat eos nisi officiis impedit. Maxime distinctio cum dolores architecto aliquam perferendis.",
  //   },
  // ];

  const infp = {
    title: 'Be Smart Take Card',
    parraphText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi odio voluptatum consequatur voluptate ea illum similique unde, numquam, quaerat eos nisi officiis impedit. Maxime distinctio cum dolores architecto aliquam perferendis.',
    link: 'users',
    linkText: 'User list',
    textAling: 'center',
  }

  const infoCards = [
    {
      id: 1,
      title: 'Aplication Online',
      parraphText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi odio voluptatum consequatur vo.',
    },
    {
      id: 2,
      title: 'Get All Aproveal',
      parraphText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi odio voluptatum consequatur vo.',
      shadow: true,
    },
    {
      id: 3,
      title: 'Card Delivery',
      parraphText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi odio voluptatum consequatur vo.',
    },
  ]

  const creditCards = [
    { name: 'Jhon Doe', phone: '#### #### #### ####' },
    { name: 'Jhon Doe', phone: '#### #### #### ####', bg: 'cyan' },
    { name: 'Jhon Doe', phone: '#### #### #### ####', bg: 'magenta' },
  ]

  return (
    <Fragment>
      <div className="hero">
        <div className="hero-bg"></div>
        <Card {...hero} />
      </div>
      <section className="wrapper">
        <CreditCard {...creditCards[0]} />
      </section>
      <section className="wrapper">
        {infoCards.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </section>
      <section className="wrapper">
        <Card {...infp} />
      </section>
      <section className="wrapper">
        <Card {...infp} />
      </section>
      <section className="wrapper wrapper--slide">
        {creditCards.map((card, index) => (
          <CreditCard key={index} {...card} />
        ))}
      </section>
    </Fragment>
  )
}

export default Home
