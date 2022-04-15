import React from 'react'
import DarkLogo from '../../assets/darklogo.svg'
import './footer.scss'
const Footer = () => {
  return (
    <footer className="footer">
      <img
        src={DarkLogo}
        alt="Logo kasa, ou le a est remplacé par une maison"
        className="footer-logo"
      />
      <p className="footer-rights">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
