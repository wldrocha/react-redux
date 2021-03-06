import React from "react";
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo.png';

const Header = () => {

  return (
    <header className="header">
      <img src={logo} alt="" className="header__img" />
      <div className="header__menu">
        <div className="header__menu--profile">
          <p>Sign in</p>
        </div>
        <ul>
          <li>
            <a href="">Cuenta</a>
          </li>
          <li>
            <a href="">Cerrar sesión</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
