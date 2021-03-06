import React from "react";
import '../assets/styles/components/CreditCard.scss'
import logo from '../assets/static/logo.png';
import card_chip from '../assets/static/card_chip.png'

// const CreditCard = ({bg, title, number})=>{
const CreditCard = ()=>{
  return (
    <div className="credit-card">
        <figure className="brand" id="brand">
          <img src={logo} alt="" />
        </figure>
        <img src={card_chip} className="chip" alt="" />
        <div className="info">
          <div className="info__group" id="numero">
            <p className="label-info__group">Number</p>
            <p className="text-info__group">#### #### #### ####</p>
          </div>
          <div className="info__bottom">
            <div className="info__group" id="nombre">
              <p className="label-info__group">Name</p>
              <p className="text-info__group">Jhon Doe</p>
            </div>

            <div className="info__group" id="expiracion">
              <p className="label-info__group">Exp</p>
              <p className="text-info__group">
                <span className="month">MM</span> /
                <span className="year">YY</span>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default CreditCard;