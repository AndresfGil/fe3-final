import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

const Navbar = () => {
  const { state, dispatch } = useContextGlobal()

  const changeTheme = () => {
    dispatch({ type: 'CHANGE_THEME' })
  }

  return (
    <nav className={`navbar ${state.theme ? 'navbar-light' : 'navbar-dark'}`}>
      <div className="navbar-content">
        <div className="navbar-logo">
          <h1>
            DH <p> Odonto</p>
          </h1>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/home" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/favs" className="navbar-link">
              Favs
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="navbar-link">
              Contacto
            </Link>
          </li>
        </ul>

        <div className="navbar-icon">
          {state.theme ? (
            <img
              onClick={() => changeTheme()}
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/do-not-disturb-2.png"
              alt="do-not-disturb-2"
            />
          ) : (
            <img
              onClick={() => changeTheme()}
              width="24"
              height="24"
              src="https://img.icons8.com/office/24/light.png"
              alt="light"
            />
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
