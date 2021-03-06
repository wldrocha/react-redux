import React from "react";
import { Link } from "react-router-dom";
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo.png';
import burguer_menu from '../assets/static/burguer_menu.png'

const Header = () => {

  return (
    <header className="header">
      <div className="container__images">
        <figure className="header__logo">
          <img src={logo} alt="" className="header__img" />
        </figure>
        <label className="nav__burguer" id="labelCheck" htmlFor="check">
          <img src={burguer_menu} alt="" />
        </label>
      </div>
      <input type="checkbox" name="check" id="check" />
      <div className="container__options" id="containerOptions">
        <nav className="nav__options">
          <Link to="/" className="option__items">
            Home
          </Link>
          <Link to="/users" className="option__items">
            Usuarios
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
