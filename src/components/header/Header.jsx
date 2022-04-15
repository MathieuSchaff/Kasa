import React from 'react'
import './header.scss'
import Logo from '../../assets/LOGO.svg'
import {Link, useMatch, useResolvedPath} from 'react-router-dom'

function CustomLink({children, to, ...props}) {
  const resolved = useResolvedPath(to)
  const match = useMatch({path: resolved.pathname, end: true})
  return (
    <Link
      className={match ? `navbar-links navbar-links--active` : 'navbar-links'}
      to={to}
      {...props}
    >
      {children}
    </Link>
  )
}

const Header = () => {
  return (
    <header className="header">
      <img
        src={Logo}
        alt="Logo kasa, ou le a est remplacé par une maison"
        className="logo"
      />
      <nav className="navbar">
        <ul className="navbar-container">
          <li>
            <CustomLink to="/">Accueil</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">A propos</CustomLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
