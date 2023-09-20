import { Link } from 'react-router-dom'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo.png'
import burguer_menu from '../assets/static/burguer_menu.png'
import { MdMenu } from 'react-icons/md'

export const Header = () => {
  function closeMenu() {
    // const check = document.getElementById('check');
    // check.checked = !check.checked;
  }

  return (
    <header className="header">
      <div className="container__images">
        <figure className="header__logo">
          <Link to="/" className="option__items" onClick={closeMenu}>
            <img src={logo} alt="" className="header__img" />
          </Link>
        </figure>
        <label className="nav__burguer" id="labelCheck" htmlFor="check">
          <MdMenu />
        </label>
      </div>
      <input type="checkbox" name="check" id="check" />
      <div className="container__options" id="containerOptions">
        <nav className="nav__options">
          <Link to="/" className="option__items" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/users" className="option__items" onClick={closeMenu}>
            Usuarios
          </Link>
        </nav>
      </div>
    </header>
  )
}
