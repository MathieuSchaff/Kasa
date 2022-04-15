import React from 'react'
import './notfound.scss'
import {useNavigate} from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  const backToHome = () => {
    navigate('/')
  }
  return (
    <div className="error--container">
      <div className="error--main">
        <p className="error--title">404</p>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <button className="error--back" onClick={backToHome}>
        Retourner sur la page d’accueil
      </button>
    </div>
  )
}

export default NotFound
