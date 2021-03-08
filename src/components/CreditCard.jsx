import React, { Fragment, useState } from "react";
import '../assets/styles/components/CreditCard.scss';
import logo from '../assets/static/logo.png';
import card_chip from '../assets/static/card_chip.png';
import Formuser from '../components/FormUser';

import { useDispatch, useSelector } from 'react-redux';
import { deletUserAction } from "../redux/userDucks";

// const CreditCard = ({bg, title, number})=>{
const CreditCard = ({
  id,
  name,
  phone,
  company,
  username,
  email,
  address,
  website,
  bg,
}) => {
  const dispatch = useDispatch();


  function bgColor(bg) {
    switch (bg) {
      case "cyan":
        return "bg-cyan-green";
      case "magenta":
        return "bg-magent-cyan";
      default:
        return "bg-blue-purple";
    }
  }

   const [rotate, setrotate] = useState(false);
   const [activateForm, setActivateForm] = useState(false);

  const setDelete = () =>{
    dispatch(deletUserAction(id));
  }


  return (
    <div className={`credit-card ${rotate ? "active" : ""}`}>
      <div
        className={["front", bgColor(bg)].join(" ")}
        onClick={() => setrotate(!rotate)}
      >
        <figure className="brand">
          {company && company.name.length > 0 ? (
            <p>{company.name}</p>
          ) : (
            <img src={logo} alt="" />
          )}
        </figure>
        <img src={card_chip} className="chip" alt="" />
        <div className="info">
          <div className="info__group">
            <p className="label-info__group">Number</p>
            <p className="text-info__group">{phone || "#### #### #### ####"}</p>
          </div>
          <div className="info__bottom">
            <div className="info__group">
              <p className="label-info__group">Name</p>
              <p className="text-info__group">{(name && name) || "Jhon Doe"}</p>
            </div>

            <div className="info__group">
              <p className="label-info__group">Exp</p>
              <p className="text-info__group">
                <span className="month">MM</span> /
                <span className="year">YY</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {id && (
        <div
          className={["back", bgColor(bg)].join(" ")}
          onClick={() => setrotate(!rotate)}
        >
          <div className="info">
            <div className="info__group">
              <p className="label-info__group">User</p>
              <p className="text-info__group">
                {username || "#### #### #### ####"}
              </p>
            </div>
            <div className="info__bottom">
              <div className="info__group">
                <p className="label-info__group">E-mail</p>
                <p className="text-info__group">
                  {(email && email) || "Jhon Doe"}
                </p>
              </div>
            </div>
          </div>
          <p className="direction">{`City: ${address.city}`}</p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </div>
      )}
      {id && (
        <Fragment>
          <div className={`container ${rotate ? "hide-btn" : ""}`}>
            <button
              className="button"
              onClick={() => setActivateForm(!activateForm)}
            >
              <i className="fas fa-pencil-alt"></i>
            </button>
            <button className="button btn-danger" onClick={setDelete}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          {activateForm && !rotate && (
            <Fragment>
              <Formuser activateForm={activateForm} userId={id} />
            </Fragment>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default CreditCard;