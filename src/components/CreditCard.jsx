import React from "react";
import { Link } from 'react-router-dom';
import '../assets/styles/components/CreditCard.scss'
import logo from '../assets/static/logo.png';
import card_chip from '../assets/static/card_chip.png'

import { useDispatch, useSelector } from 'react-redux';
import { deletUserAction } from "../redux/userDucks";

// const CreditCard = ({bg, title, number})=>{
const CreditCard = ({id,name, phone, company})=>{

  const dispatch = useDispatch();

  return (
    <div className="credit-card">
      <figure className="brand" id="brand">
        {
        <p>{company && company.name}</p> ?
        <img src={logo} alt="" />: null}
      </figure>
      <img src={card_chip} className="chip" alt="" />
      <div className="info">
        <div className="info__group" id="numero">
          <p className="label-info__group">Number</p>
          <p className="text-info__group">{phone || "#### #### #### ####"}</p>
        </div>
        <div className="info__bottom">
          <div className="info__group" id="nombre">
            <p className="label-info__group">Name</p>
            <p className="text-info__group">{(name && name) || "Jhon Doe"}</p>
          </div>

          <div className="info__group" id="expiracion">
            {id && (
              <button onClick={() => dispatch(deletUserAction(id))}>de</button>
            )}
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